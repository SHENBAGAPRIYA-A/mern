import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const[name,setName]=useState();
    const[category,setCategory]=useState();
    const[price,setPrice]=useState();
    const[isEdit,setIsEdit]=useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/");
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const handleCategory = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filterProductsByCategory = () => {
        if (selectedCategory === 'all') {
            return products;
        }
        return products.filter((item) => item.category === selectedCategory);
    };

    const AddCategory = async(event) => {
        event.preventDefault();
        if (!isEdit) {
            // const newexpense = {
            //     id:uuidv4(),
            //     date: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`,
            //     category:category,
            //     amount: parseInt(amount)
            // };
            const response=await axios.post('http://localhost:3001/api',{
                name:name,
                price:price,
                category: category,
                
            })
            setProducts([...products, response.data]);  //spread operator
            toast.success("New user Added Successfully!");  
            setName("");
            setPrice(" ");
            setCategory("");
            
        } 
    };
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
        <div>
            <button onClick={openModal} style={{ marginLeft: "1000px" }}>Add New</button>

            
            <select id="filter" value={selectedCategory} onChange={handleCategory}>
                <option value="all">All</option>
                <option value="Dress">Dress</option>
                <option value="Electrical">Electrical</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Bags">Bags</option>
                <option value="Footwear">Footwear</option>
            </select>

            <hr />
            <h1 style={{ marginLeft: "10px", color: "grey" }}>Product Details</h1>
            <hr />
            <h3>Product Details</h3>

    
            {/* <table className="table" style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Name</th>
                        <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Price</th>
                        <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {filterProductsByCategory().map((user, index) => (
                        <tr key={index}>
                            <td style={{ border: "2px solid black" }}>{user.name}</td>
                            <td style={{ border: "2px solid black" }}>{user.price}</td>
                            <td style={{ border: "2px solid black" }}>{user.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <div className="card-container">
                {filterProductsByCategory().map((product, index) => (
                    <div className="card" key={index}>
                        <img className="image"src={product.image}/>
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Enter the Product Details</h2>
                        <form onSubmit={(event)=>AddCategory(event)}>
                            <label>Product Name:</label>
                            <input type="text" required /><br />
                            <label>Price:</label>
                            <input type="number" required /><br />
                            <label>Category:</label>
                            <select>
                                <option value="-">-</option>
                                <option value="Dress">Dress</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Cosmetics">Cosmetics</option>
                                <option value="Bags">Bags</option>
                                <option value="Footwear">Footwear</option>
                            </select><br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products
