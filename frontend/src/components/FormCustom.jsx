import React, { useState } from 'react';
import {Form,Container,Button} from 'react-bootstrap';
import TextField from './TextField';
import axios from 'axios';
function FormCustom(props) {

    var data ={name:"", desc:"", category:"Appliances", price:"", quantity:"", imageLinks:"", videoLinks:"", pdfLink:""};
    const [newErrors , setNewErrors]=useState({});

    function changeHandler(ce,value){
        data[ce.target.id]=value;
    }

    var isValid=false;
    function send(e){
        isValid=true;
        setNewErrors(validate());
        if(!isValid){
            e.preventDefault();
        }else{
            console.log("Hi");
            axios.post('http://localhost:8082/admin/product',data);
        }
        console.log(data);
    }

    function validate(){
        const {name , desc, category, price, quantity, imageLinks, videoLinks, pdfLink}=data;
        const newErrors={};
        if (!name) {
            isValid = false;
            newErrors.name = "Please enter product name";
          }
        if (!desc) {
            isValid = false;
            newErrors.desc= "Please enter description for the product";
          }
        if (!category) {
            isValid = false;
            newErrors.category = "Please enter category of the product";
        }

        if (!price) {
            isValid = false;
            newErrors.price= "Please enter price for the product";
          }
        
          if (!quantity) {
            isValid = false;
            newErrors.quantity = "Please enter quantity of the product";
          }

          if (!imageLinks) {
            isValid = false;
            newErrors.imageLinks= "Please enter atleast one image link";
          }

          if (typeof price !== "undefined") {
          
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(price)) {
              isValid = false;
              newErrors.price = "Please enter only digits";
            }
          }
          if (typeof quantity !== "undefined") {
          
            var pat = new RegExp(/^[0-9\b]+$/);
            if (!pat.test(quantity)) {
              isValid = false;
              newErrors.quantity = "Please enter only digits";
            }
          }

          return newErrors;

    }

    return (
        <div className="mx-auto">
            <Form>
        <Container className="formCenter">
        <div>
        <TextField
            id="name"
            name="Product Name"
            placeholder="Enter Product Name"
            input={changeHandler}
            isInvalid={!!newErrors.name}
            error={newErrors.name}
        />
        <Form.Group className="mb-3 required">
        <Form.Label className="control-label">Product Description</Form.Label>
            <Form.Control
            id="desc"
            as="textarea"
            placeholder="Enter Description here"
            style={{ height: '100px' }}
            onChange={(e)=>changeHandler(e,e.target.value)}
            isInvalid={!!newErrors.desc}
            />
            <Form.Control.Feedback type='invalid'>{newErrors.desc}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 required">
        <Form.Label  className="control-label">Category</Form.Label>
        <select id="category" className="form-control" aria-label="Default select example" onChange={(e)=>changeHandler(e,e.target.value)}>
            <option value="Appliances">Appliances</option>
            <option value="Clothes">Clothes</option>
            <option value="Books">Books</option>
            <option value="Miscellaneous">Miscellaneous</option>
        </select>
        </Form.Group>
        
        <TextField
            id="price"
            name="Price(INR)"
            placeholder="Enter Price"
            input={changeHandler}
            isInvalid={!!newErrors.price}
            error={newErrors.price}
        />

        <TextField
            id="quantity"
            name="Quantity"
            placeholder="Enter Quantity"
            input={changeHandler}
            isInvalid={!!newErrors.quantity}
            error={newErrors.quantity}
        />

        <TextField
            id="imageLinks"
            name="Image Links"
            placeholder="Enter Image Link"
            input={changeHandler}
            isInvalid={!!newErrors.imageLinks}
            error={newErrors.imageLinks}
        />

        <TextField
            id="videoLinks"
            name="Video Links"
            placeholder="Enter Video Links"
            input={changeHandler}
            isInvalid={!!newErrors.videoLinks}
            error={newErrors.videoLinks}
        />
        <TextField
            name="PDF Link"
            placeholder="Enter PDF Link"
            id="pdfLink"
            input={changeHandler}
            isInvalid={!!newErrors.pdfLink}
            error={newErrors.pdfLink}
        />
            <Button variant="dark" type="submit" onClick={send}>
                Add Product
            </Button>
            </div>
        </Container>
            
        </Form>
        </div>
    );
}

export default FormCustom;