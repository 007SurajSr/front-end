import React from "react";

const AddProduct = () => {


    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [userID, setUserID] = React.useState('');
    const [error, setError] = React.useState('false');

    const collectProduct = async () => {
      
        if(!name || !price || !category || !company)
        {
            setError(true);
            return false;
        }
         const userID = JSON.parse(localStorage.getItem('user'))._id;
            const response = await fetch('http://localhost:5000/add-product', {
                method: 'POST',
                body: JSON.stringify({name,price,category,company,userID}),
                headers:{
                    'Content-Type':'application/json'
                },
            });
            const result = await response.json();
            console.warn(result);
    }

    return(
        <div className="product">
             <h1> Add your all products here</h1>
             <input type="text" placeholder="Enter product name" className="inputBox"
             value={name} onChange={(e)=>{setName(e.target.value)}}/>
           {error && !name && <span className="invalid-input"> Enter valid name</span> }

             <input type="text" placeholder="Enter product price" className="inputBox"
             value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
           {error && !price && <span className="invalid-input"> Enter valid price</span> } 

             <input type="text" placeholder="Enter product category" className="inputBox"
            value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
           {error && !category && <span className="invalid-input"> Enter valid category</span> }

             <input type="text" placeholder="Enter product company" className="inputBox"
            value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
           {error && !company && <span className="invalid-input"> Enter valid company</span> }

             <input type="text" placeholder="Enter product userID" className="inputBox"
             value={userID} onChange={(e)=>{setUserID(e.target.value)}}/>
              {error && !userID && <span className="invalid-input"> Enter valid userID</span> }

             <button className="appButton" onClick={collectProduct}>Add Product</button>
        </div>
    )   
}

export default AddProduct;  