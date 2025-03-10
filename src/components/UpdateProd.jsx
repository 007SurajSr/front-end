import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 

const UpdateProd = () => {


    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [userID, setUserID] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getProductDetails = async() =>{
       
        let result = await fetch(`http://localhost:5000/update/${params.id}`,{
            headers : {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
               } 
        });
        result = await result.json();
        setName(result.name);
        setCategory(result.category);
        setCompany(result.company);
        setPrice(result.price);
        setUserID(result.userID);
    }

    const updateProduct = async () =>{
        console.log(name,price,category, company,userID);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: 'PUT',
            body: JSON.stringify({name,price,company,category,userID}),
            headers: {
                'Content-Type':'application/json',
                'authorization' : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                   
            }
        });
        result = await result.json();
        console.log(result);
        navigate('/')
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