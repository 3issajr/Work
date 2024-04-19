import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Alert } from 'antd';
import { Fade } from 'react-awesome-reveal';
import AdminDashboard from './AdminDashboard';

export default function AdminMenu() {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    //Adding Menu
    const [menu, setMenu] = useState([]);
    const [addMenuBtn, setAddMenuBtn] = useState(false);
    const [newMenuItem, setNewMenuItem] = useState({ name: '', price: '', info: '' });

    //Updating Menu
    const [editItemId, setEditItemId] = useState(null);
    const [updatedMenuItem, setUpdatedMenuItem] = useState({ name: '', price: '', info: '' });

    useEffect(() => {
        axios.get('http://localhost:3000/menu')
            .then(response => {
                setAlertMessage(response.data.message);
                setMenu(response.data.menu);
                setAlertType('success');
                setAlertVisible(true);
            })
            .catch(error => {
                setAlertMessage(error.response.data.error);
                setAlertType('error');
                setAlertVisible(true);
            });
    }, []);

    const handleAddMenuBtnClick = () => {setAddMenuBtn(prevState => !prevState);};

    const handleAddMenuBtnItem = () => {
        axios.post('http://localhost:3000/menu', newMenuItem)
            .then(response => {
                setAlertMessage(response.data.message);
                setAlertType('success');
                setAlertVisible(true);
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
            .catch(err => {
                setAlertMessage(err.response.data.error);
                setAlertType('success');
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
                console.error('Error deleting menu item:', error);
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
                setMenu(prevMenu => prevMenu.map(item => item._id === itemId ? updatedMenuItem : item));
                setAlertMessage(response.data.message);
                setAlertType('success');
                setAlertVisible(true);   
                    axios.get('http://localhost:3000/menu')
                    .then(response => {
                        setMenu(response.data.menu); // Update the menu state with the updated items
                        setEditItemId(false)
                    })
                    .catch(error => {
                        console.error('Error fetching updated menu:', error);
                    });
            })
            .catch(error => {
                console.error('Error updating menu item:', error);
            });
    };

    const handleInputChange = (e, propertyName) => {
        const { value } = e.target;
        setUpdatedMenuItem(prevState => ({ ...prevState, [propertyName]: value }));
    };

    return (
        <div id='menu' className='h-screen'>

            <AdminDashboard />

            <Fade direction='up'>
                <div className='text-5xl flex justify-center items-center mt-10'>
                    {alertVisible && ( <Alert  message={alertMessage} type={alertType} closable className='text-3xl' onClose={() => setAlertVisible(false)}/> )}
                </div>
            </Fade>

            <div className='flex justify-center my-10'>
                <button className='rounded-lg shadow-sm text-white bg-red-800 p-3' onClick={handleAddMenuBtnClick}>Add Menu Item</button>
            </div>

            <div className='flex justify-center'>

                <table className="table-auto text-3xl border-4 border-collapse border-gray-400">

                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-4">Name</th>
                            <th className="px-4 py-2 border-4">Price</th>
                            <th className="px-4 py-2 border-4">Info</th>
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
                        {/* Additional row for adding menu item */}
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
