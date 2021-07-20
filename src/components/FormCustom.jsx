import React from 'react';
import {Form,Container,Button} from 'react-bootstrap';
import TextField from './TextField';
function FormCustom(props) {
    return (
        <div className="bgimg mx-auto">
            <Form>
        <Container>
        <div className="formCenter">
        <TextField
            name="Product Name"
            placeholder="Enter Product Name"
            controlId="name"
        />
            <Form.Group className="mb-3" controlId="name">
            <Form.Label>Product Description</Form.Label>
                <Form.Control
                as="textarea"
                placeholder="Enter Description here"
                style={{ height: '100px' }}
                className="inputsize"
                />
            </Form.Group>

            <TextField
            name="Category"
            placeholder="Enter Category"
            controlId="category"
        />

        <TextField
            name="Price(INR)"
            placeholder="Enter Price"
            controlId="price"
        />

        <TextField
            name="Quantity"
            placeholder="Enter Quantity"
            controlId="quantity"
        />

        <TextField
            name="Image Links"
            placeholder="Enter Image Link"
            controlId="imagelinks"
        />

        <TextField
            name="Video Link"
            placeholder="Enter Video Link"
            controlId="videolink"
        />
            <TextField
                name="PDF Link"
            placeholder="Enter PDF Link"
            controlId="pdflink"
            />
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </div>
        </Container>
            
        </Form>
        </div>
    );
}

export default FormCustom;