import React, { useEffect, useState } from "react";

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
    
    return (
        <div className="products-list">
            <h2>Product List</h2>
            <ul>
                <li><b/>Serial Number</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.company}</li>
                <li>{item.category}</li>
                <li><button onClick={()=>{deleteProduct(item._id)}}>Delete</button></li>
            </ul>
                )
            }
        </div>
    )
}

export default ProductList;