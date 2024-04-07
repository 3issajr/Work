import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdminMenu() {
    const [menu, setMenu] = useState([]);
    const [addMenu, setAddMenu] = useState(false); // Change to false to initially show menu list
    const [newMenuItem, setNewMenuItem] = useState({
        name: '',
        price: '',
        info: ''
    });

    useEffect(() => {
        // Fetch menu items from the server
        axios.get('http://localhost:3000/menu')
            .then(response => {
                setMenu(response.data); // Assuming your API returns menu items in an array
            })
            .catch(error => {
                console.error('Error fetching menu:', error);
            });
    }, []);

    const handleAddMenuClick = () => {
        setAddMenu(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewMenuItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddMenuItem = () => {
        // Send a POST request to add a new menu item
        axios.post('http://localhost:3000/menu', newMenuItem)
            .then(response => {
                // Refresh the menu after adding the new item
                setMenu(prevMenu => [...prevMenu, response.data]);
                setAddMenu(false); // Hide the add menu form
            })
            .catch(error => {
                console.error('Error adding menu item:', error);
            });
    };

    return (
        <>
            <div id='menu'>
                <div>
                    <button onClick={handleAddMenuClick}>Add Menu</button>
                </div>
                {addMenu && (
                    <div>
                        {/* Form to add a new menu item */}
                        <input type="text" name="name" placeholder="Name" value={newMenuItem.name} onChange={handleInputChange} />
                        <input type="text" name="price" placeholder="Price" value={newMenuItem.price} onChange={handleInputChange} />
                        <input type="text" name="info" placeholder="Info" value={newMenuItem.info} onChange={handleInputChange} />
                        <button onClick={handleAddMenuItem}>Add</button>
                    </div>
                )}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(item => (
                            <tr key={item.id}> {/* Assuming each menu item has a unique id */}
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
