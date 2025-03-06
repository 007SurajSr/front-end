import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList =()=>{
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() =>{
        getProducts();
    },[]);

    const getProducts = async () =>{
          const result = await fetch('http://localhost:5000/products',{
           headers : {
            authorization: JSON.parse(localStorage.getItem('token'))
           } 
          
          });
          
          const  result1 = await result.json();
          setProducts(result1);
    }
    

    const deleteProduct = async(id)=>{
       const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: 'Delete'
       });
       var result1 = await response.json();
       if(result1){
        getProducts();
       }};

    const searchHandle = async (e) =>{
       
         const key = e.target.value;
         if(key.length ===0){
            getProducts();
            return;
         }
         const response = await fetch(`http://localhost:5000/search/${key}`);
         const  result = await response.json()
         if(result){
            setProducts(result)
         }else{
            getProducts();
         }
       }
    
    return (
        <div className="products-list">
            <h2>Product List</h2>
            <input type="text" className="search-product" placeholder="Search product" onChange={searchHandle} />
            <ul>
                <li><b/>Serial Number</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
               products.length>0 ? products.map((item, index) =>
                    <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.company}</li>
                <li>{item.category}</li>
                <li>
                    <button onClick={()=>{deleteProduct(item._id)}}>Delete</button>
                    <Link to={"/update/"+item._id}>Update</Link>
                </li>
            </ul>
                )
                :<h1> No result found </h1>
            }
        </div>
    )
}

export default ProductList;