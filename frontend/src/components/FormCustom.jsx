import React from 'react';
import {Form,Container,Button} from 'react-bootstrap';
import TextField from './TextField';
import axios from 'axios';

function FormCustom(props) {

    var data ={name:"", desc:"", category:"", price:"", quantity:"", imageLinks:"", videoLinks:"", pdfLink:""};


    function changeHandler(ce,value){
        data[ce.target.id]=value;
    }

    function send(){
        console.log(validate());
        console.log(data);
        axios.post('http://localhost:8082/admin/product',data);
    }

    function validate(){
        const {name , desc, category, price, quantity, imageLinks, videoLinks, pdfLink}=data;
        const newErrors={};
        var isValid;
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

          if (!videoLinks) {
            isValid = false;
            newErrors.videoLink = "Please enter atleast one video link";
          }

          if (!pdfLink) {
            isValid = false;
            newErrors.pdfLink = "Please enter a pdf link for reference";
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
        />
        <Form.Group className="mb-3">
        <Form.Label>Product Description</Form.Label>
            <Form.Control
            id="desc"
            as="textarea"
            placeholder="Enter Description here"
            style={{ height: '100px' }}
            onChange={(e)=>changeHandler(e,e.target.value)}
            />
        </Form.Group>

        <TextField
            id="category"
            name="Category"
            placeholder="Enter Category"
            input={changeHandler}
        />

        <TextField
            id="price"
            name="Price(INR)"
            placeholder="Enter Price"
            input={changeHandler}
        />

        <TextField
            id="quantity"
            name="Quantity"
            placeholder="Enter Quantity"
            input={changeHandler}
        />

        <TextField
            id="imageLinks"
            name="Image Links"
            placeholder="Enter Image Link"
            input={changeHandler}
        />

        <TextField
            id="videoLinks"
            name="Video Links"
            placeholder="Enter Video Links"
            input={changeHandler}
        />
        <TextField
            name="PDF Link"
            placeholder="Enter PDF Link"
            id="pdfLink"
            input={changeHandler}
        />
            <Button variant="primary" type="submit" onClick={send}>
                Add Product
            </Button>
            </div>
        </Container>
            
        </Form>
        </div>
    );
}

export default FormCustom;