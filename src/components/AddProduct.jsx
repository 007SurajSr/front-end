import React from "react";

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [userID, setUserID] = React.useState('');

    const collectProduct =() => {
        console.log(name,price,category,company,userID);
    }

    return(
        <div className="product">
             <h1> Add your all products here</h1>
             <input type="text" placeholder="Enter product name" className="inputBox"
             value={name} onChange={(e)=>{setName(e.target.value)}}/>
             <input type="text" placeholder="Enter product price" className="inputBox"
             value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
             <input type="text" placeholder="Enter product category" className="inputBox"
             value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
             <input type="text" placeholder="Enter product company" className="inputBox"
             value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
             <input type="text" placeholder="Enter product userID" className="inputBox"
             value={userID} onChange={(e)=>{setUserID(e.target.value)}}/>
             <button className="appButton" onClick={collectProduct}>Add Product</button>
        </div>
    )   
}

export default AddProduct;  