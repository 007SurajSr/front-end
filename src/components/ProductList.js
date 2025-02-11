import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList =()=>{
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getProducts();
    },[]);

    const getProducts = async () =>{
          let result = await fetch('http://localhost:5000/products');
          result = await result.json();
          setProducts(result);
    }
    console.warn('products', products);

    const deleteProduct = async(id)=>{
       let result = await fetch(`http://localhost:5000/delete/${id}`, {
        method: 'Delete'
       });
       result = await result.json();
       if(result){
        getProducts();
       }};

       const searchHandle = async (e) =>{
         console.log();
         let key = e.target.value;
         let result = await fetch(`http://localhost:5000/search/${key}`);
         result = await result.json()
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
                <li>Company</li>
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