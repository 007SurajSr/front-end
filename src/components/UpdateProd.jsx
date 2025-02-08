import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProd = () => {


    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [userID, setUserID] = React.useState('');
    const params = useParams();

    useEffect (() => {
        getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getProductDetails = async() =>{
        console.log(params);
        let result = await fetch(`http://localhost:5000/products/${params.id}`);
        result = await result.json();
        setName(result.name);
        setCategory(result.category);
        setCompany(result.company);
        setPrice(result.price);
        setUserID(result.userID);
    }

    const updateProduct = async () =>{
        console.log(name,price,category, company,userID);
    } 

    return(
        <div className="product">
             <h1> Update your product from here</h1>
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
            
             <button className="appButton" onClick={updateProduct}>Update Product</button>
        </div>
    )   
}

export default UpdateProd;  