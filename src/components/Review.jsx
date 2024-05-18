import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Review = () => {
    const [review, setReview] = useState([]);
    const[productname,setProductname]=useState();
    const [showModal, setShowModal] = useState(false);
    const[userid,setUserid]=useState();
    const[isEdit,setIsEdit]=useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9001/");
                setReview(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const handleCategory = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filterReviewByCategory = () => {
        if (selectedCategory === 'all') {
            return review;
        }
        return review.filter((item) => item.productname === selectedCategory);
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
                userid:userid,
                productname:productname,
                review: review,
                
            })
            setReview([...review, response.data]);  //spread operator
            toast.success("New user Added Successfully!");  
            setUserid("");
            setProductname(" ");
            setReview("");
            
        } 
    };
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
        <div>
            <button onClick={openModal} style={{ marginLeft: "1000px" }}>Add New</button>
            <select id="filter" value={selectedCategory} onChange={handleCategory}>

                
                <option value="all">All</option>
                <option value="kurti">kurti</option>
                <option value="IronBox">IronBox</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Bags">Bags</option>
                <option value="Footwear">Footwear</option>
            </select>

            <hr />
            <h1 style={{ marginLeft: "10px", color: "grey" }}>Product Reviews</h1>
            <hr />
            <h3>Product Reviews</h3>

    
            <table className="table" style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        
                        <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>ProductName</th>
                        <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {filterReviewByCategory().map((user, index) => (
                        <tr key={index}>
                            
                            <td style={{ border: "2px solid black" }}>{user.productname}</td>
                            <td style={{ border: "2px solid black" }}>{user.review}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

export default Review
