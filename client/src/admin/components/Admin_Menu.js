import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'antd';
import { Fade } from 'react-awesome-reveal';
import AdminDashboard from './AdminDashboard';

export default function AdminMenu() {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const [menu, setMenu] = useState([]);
    const [addMenuBtn, setAddMenuBtn] = useState(false);
    const [newMenuItem, setNewMenuItem] = useState({ name: '', price: '', info: '', photo: null });
    const [editItemId, setEditItemId] = useState(null);
    const [updatedMenuItem, setUpdatedMenuItem] = useState({ name: '', price: '', info: '', photo: null });

    useEffect(() => {
        axios.get('http://localhost:3000/menu')
            .then(response => {
                setMenu(response.data.menu);
                setAlertMessage(response.data.message);
                setAlertType('success');
                setAlertVisible(true);
            })
            .catch(error => {
                setAlertMessage(error.response.data.error);
                setAlertType('error');
                setAlertVisible(true);
            });
    }, []);

    const handleAddMenuBtnClick = () => {
        setAddMenuBtn(prevState => !prevState);
    };

    const handleAddMenuBtnItem = () => {
        const formData = new FormData();
        formData.append('name', newMenuItem.name);
        formData.append('price', newMenuItem.price);
        formData.append('info', newMenuItem.info);
        formData.append('photo', newMenuItem.photo);

        axios.post('http://localhost:3000/menu', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setMenu(response.data.menu);
                setAlertMessage(response.data.message);
                setAlertType('success');
                setAlertVisible(true);
                setAddMenuBtn(false);
                axios.get('http://localhost:3000/menu')
                    .then(response => {
                        setMenu(response.data.menu);
                        setAddMenuBtn(false);
                    })
                    .catch(err => {
                        setAlertMessage(err.response.data.error);
                        setAlertType('error');
                        setAlertVisible(true);
                    });
            })
            .catch(error => {
                setAlertMessage(error.response.data.error);
                setAlertType('error');
                setAlertVisible(true);
            });
    };

    const handleDeleteMenuItem = (itemId) => {
        axios.delete(`http://localhost:3000/menu/${itemId}`)
            .then(response => {
                setMenu(prevMenu => prevMenu.filter(item => item._id !== itemId));
                setAlertMessage(response.data.message);
                setAlertType('success');
                setAlertVisible(true);
            })
            .catch(error => {
                setAlertMessage(error.response.data.error);
                setAlertType('error');
                setAlertVisible(true);
            });
    };

    const handleEditClick = (itemId) => {
        setEditItemId(itemId);
        const itemToEdit = menu.find(item => item._id === itemId);
        setUpdatedMenuItem(itemToEdit);
    };

    const handleUpdateMenuItem = (itemId) => {
        axios.put(`http://localhost:3000/menu/${itemId}`, updatedMenuItem)
            .then(response => {
                setMenu(prevMenu => prevMenu.map(item => item._id === itemId ? response.data.menu : item));
                setAlertMessage(response.data.message);
                setAlertType('success');
                setAlertVisible(true);
                setEditItemId(null);
            })
            .catch(error => {
                setAlertMessage(error.response.data.error);
                setAlertType('error');
                setAlertVisible(true);
            });
    };

    const handleInputChange = (e, propertyName) => {
        const { value } = e.target;
        setUpdatedMenuItem(prevState => ({ ...prevState, [propertyName]: value }));
    };

    const handleImageChange = (e) => {  setNewMenuItem(prevState => ({ ...prevState, photo: e.target.files[0] }));};

    return (
        <div id='menu' className='h-screen'>
            <AdminDashboard />

            <Fade direction='up'>
                <div className='text-5xl flex justify-center items-center mt-10'>
                    {alertVisible && (<Alert message={alertMessage} type={alertType} closable className='text-3xl' onClose={() => setAlertVisible(false)} />)}
                </div>
            </Fade>

            <div className='flex justify-center my-10'>
                <button className='rounded-lg shadow-sm text-white bg-red-800 p-3' onClick={handleAddMenuBtnClick}>Add Menu Item</button>
            </div>

            <div className='flex justify-center pb-10'>
                <table className="table-auto text-3xl border-4 border-collapse border-gray-400">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-4">Name</th>
                            <th className="px-4 py-2 border-4">Price</th>
                            <th className="px-4 py-2 border-4">Info</th>
                            <th className="px-4 py-2 border-4">Photo</th>
                            <th colSpan={2} className="px-4 py-2 border-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(item => (
                            <tr key={item._id}>
                                <td className="px-4 py-2 border-4">
                                    {editItemId === item._id ? (
                                        <input
                                            type="text"
                                            value={updatedMenuItem.name}
                                            onChange={(e) => handleInputChange(e, 'name')}
                                        />
                                    ) : (
                                        item.name
                                    )}
                                </td>
                                <td className="px-4 py-2 border-4">
                                    {editItemId === item._id ? (
                                        <input
                                            type="text"
                                            value={updatedMenuItem.price}
                                            onChange={(e) => handleInputChange(e, 'price')}
                                        />
                                    ) : (
                                        item.price
                                    )}
                                </td>
                                <td className="px-4 py-2 border-4">
                                    {editItemId === item._id ? (
                                        <input
                                            type="text"
                                            value={updatedMenuItem.info}
                                            onChange={(e) => handleInputChange(e, 'info')}
                                        />
                                    ) : (
                                        item.info
                                    )}
                                </td>
                                <td className="px-4 py-2 border-4">
                                    <img src={`http://localhost:3000/${item.photo}`} alt={item.name} style={{ width: '100px' }} />
                                </td>
                                <td className="px-4 py-2 border-4">
                                    {editItemId === item._id ? (
                                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleUpdateMenuItem(item._id)}>Save</button>
                                    ) : (
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEditClick(item._id)}>Update</button>
                                    )}
                                </td>
                                <td className="px-4 py-2 border-4">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteMenuItem(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}


                        {/*On Pressing Add Menu Button */}
                        {addMenuBtn && (
                            <tr>
                                <td className="px-4 py-2 border-4">
                                    <input
                                        type="text"
                                        value={newMenuItem.name}
                                        onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
                                        placeholder="Name"
                                    />
                                </td>
                                <td className="px-4 py-2 border-4">
                                    <input
                                        type="text"
                                        value={newMenuItem.price}
                                        onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
                                        placeholder="Price"
                                    />
                                </td>
                                <td className="px-4 py-2 border-4">
                                    <input
                                        type="text"
                                        value={newMenuItem.info}
                                        onChange={(e) => setNewMenuItem({ ...newMenuItem, info: e.target.value })}
                                        placeholder="Info"
                                    />
                                </td>
                                <td className="px-4 py-2 border-4">
                                    <input
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                </td>
                                <td className="px-4 py-2 border-4" colSpan="2">
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddMenuBtnItem}>Add</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
