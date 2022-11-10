import React, { useState } from 'react';
import './AddProduct.css';
import AddProductService from '../../services/AddProductService';
import { useHistory } from "react-router-dom";
import ButtonAppBar from '../ButtonAppBar';
import BottomNavigator from '../BottomNavigator';
import { Button, Card, TextField } from '@mui/material';

function AddProduct() {

    const history = useHistory();

    const [products, setProducts] = useState({
    title: "",
    image: "",
    price: 0,
    description: "",
    seller: "",
    });

    const handleChange = (e) => {
    const value = e.target.value;
    setProducts({...products,[e.target.name] : value});
    console.log(products);
    }


    const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
        resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
        reject(error);
        };
    });
    };
    const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setProducts({ ...products, image: base64 });
    };

    const saveProduct = (e) => {
    e.preventDefault();
    AddProductService.saveProduct(products)
        .then((response) => {
        alert("Product is successfully added!");
        console.log(response);
        setProducts({
            title: "",
            image: "",
            price: 0,
            description: "",
            seller: "",
        })
        })
        .catch((error) => {
        console.log(error.response.data);
        });
    };

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if(isAuthenticated === "false") {
    history.push("/");
  } else {
    return (
        <>
            <ButtonAppBar />
            <div className='add-product-container'>
                <h1>Add Product Here 🛒</h1>
                <Card sx={{ width: 0.25, height: 0.7, padding: '20px' }}>
                    <form onSubmit={saveProduct} className='add-product-form'>
                        <TextField sx={{ width: '300px'}} variant='outlined' name='title' value={products.title} type='text' label='title' onChange={(e) => handleChange(e)} />
                        <input className='ap-form-input' type='file' name='image' onChange={(e)=>{
                        handleFileUpload(e); }} />
                        <TextField sx={{ width: '300px'}} className='ap-form-input' type='number' name='price' value={products.price} label='price' onChange={(e) => handleChange(e)} />
                        <TextField sx={{ width: '300px'}} className='ap-form-input' type='text' name='description' value={products.description} label='description' onChange={(e) => handleChange(e)}  />
                        <TextField sx={{ width: '300px'}} className='ap-form-input' type='text' name='seller' value={products.seller} label='seller' onChange={(e) => handleChange(e)} />
                        <Button variant='contained' type='submit'>Add Product</Button>
                    </form>
                </Card>
            </div>
            <BottomNavigator />
        </>
      )
  }
}

export default AddProduct;