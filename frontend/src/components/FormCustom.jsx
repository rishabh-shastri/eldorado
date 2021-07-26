import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import TextField from './TextField';
import Creatable from 'react-select/creatable';
import { addProduct } from './product';

const categories = [
    { label: "Appliances", value: 1 },
    { label: "Books", value: 2 },
    { label: "Clothes", value: 3 },
    { label: "Miscellaneous", value: 4 }
];
function FormCustom(props) {

    const [data, setData] = useState({ name: "", desc: "", category: "", price: "", quantity: "", imageLinks: "", videoLinks: "", pdfLink: "" });
    const [errors, setErrors] = useState({});
    const [categoryValue, setCategoryValue] = useState('');
    function changeHandler(ce,value) {
        setData({ ...data, [ce.target.id]: value });
    }
    var isValid = false;
    function addHandler(e) {
        isValid = true;
        setErrors(validate());
        if (!isValid) {
            e.preventDefault();
        } else {
            addProduct(data);
        }
    }

    function validate() {
        const { name, desc, category, price, quantity, imageLinks, videoLinks, pdfLink } = data;
        const newErrors = {};
        if (!name) {
            isValid = false;
            newErrors.name = "Please enter product name";
        }
        if (!desc) {
            isValid = false;
            newErrors.desc = "Please enter description for the product";
        }
        if (!category) {
            isValid = false;
            newErrors.category = "Please enter category of the product";
        }

        if (!price) {
            isValid = false;
            newErrors.price = "Please enter price for the product";
        }

        if (!quantity) {
            isValid = false;
            newErrors.quantity = "Please enter quantity of the product";
        }

        if (!imageLinks) {
            isValid = false;
            newErrors.imageLinks = "Please enter atleast one image link";
        }

        if (typeof price !== "undefined" && !newErrors.price) {

            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(price)) {
                isValid = false;
                newErrors.price = "Please enter only digits";
            }
        }
        if (typeof quantity !== "undefined" && !newErrors.quantity) {

            var pat = new RegExp(/^[0-9\b]+$/);
            if (!pat.test(quantity)) {
                isValid = false;
                newErrors.quantity = "Please enter only digits";
            }
        }
        if (!newErrors.imageLinks) {
            var imageLinksArray = imageLinks.split(',');
            imageLinksArray = imageLinksArray.map(link => link.trim());
            imageLinksArray.forEach(link => validateImageLinks(link));
        }

        function validateImageLinks(link) {
            var pat = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i);
            if (!pat.test(link)) {
                isValid = false;
                newErrors.imageLinks = "Invalid Image Link";
            }
        }

        if (videoLinks){
            var videoLinksArray = videoLinks.split(',');
            videoLinksArray = videoLinksArray.map(link => link.trim());
            videoLinksArray.forEach(link => validateVideoLinks(link));
        }
            

        function validateVideoLinks(link) {
            pat = new RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/i);
            if (!pat.test(link)) {
                isValid = false;
                newErrors.videoLinks = "Invalid Video Link";
            }
        }

        if (pdfLink) {
            pat = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:pdf)/i);
            if (!pat.test(pdfLink)) {
                isValid = false;
                newErrors.pdfLink = "Invalid PDF Link";
            }
        }

        return newErrors;

    }

    function handleChange(value) {
        setCategoryValue(value);
        if (value)
            setData({ ...data, 'category': value.label });
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
                            isInvalid={!!errors.name}
                            error={errors.name}
                        />
                        <Form.Group className="mb-3 required">
                            <Form.Label className="control-label">Product Description</Form.Label>
                            <Form.Control
                                id="desc"
                                as="textarea"
                                placeholder="Enter Product Description"
                                style={{ height: '100px' }}
                                onChange={(e) => changeHandler(e,e.target.value)}
                                isInvalid={!!errors.desc}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.desc}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 required">
                            <Form.Label className="control-label">Category</Form.Label>
                            <Creatable
                                id="category"
                                isClearable
                                onChange={(value) => handleChange(value)}
                                options={categories}
                                value={categoryValue}

                            />
                            <Form.Control className='zeroheight'
                                isInvalid={!!errors.category}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.category}</Form.Control.Feedback>
                        </Form.Group>

                        <TextField
                            id="price"
                            name="Price"
                            placeholder="Enter Price"
                            input={changeHandler}
                            isInvalid={!!errors.price}
                            error={errors.price}
                        />

                        <TextField
                            id="quantity"
                            name="Quantity"
                            placeholder="Enter the Quantity"
                            input={changeHandler}
                            isInvalid={!!errors.quantity}
                            error={errors.quantity}
                        />

                        <TextField
                            id="imageLinks"
                            name="Image Links"
                            placeholder="Enter Image Links (Use comma for multiple Links)"
                            input={changeHandler}
                            isInvalid={!!errors.imageLinks}
                            error={errors.imageLinks}
                        />

                        <TextField
                            id="videoLinks"
                            name="Video Links"
                            placeholder="Enter Youtube Video Links  (Use comma for multiple Links)"
                            input={changeHandler}
                            isInvalid={!!errors.videoLinks}
                            error={errors.videoLinks}
                        />
                        <TextField
                            name="PDF Link"
                            placeholder="Enter PDF Link"
                            id="pdfLink"
                            input={changeHandler}
                            isInvalid={!!errors.pdfLink}
                            error={errors.pdfLink}
                        />
                        <Button variant="dark" type="submit" onClick={addHandler}>
                            Add Product
                        </Button>
                    </div>
                </Container>

            </Form>
        </div>
    );
}

export default FormCustom;