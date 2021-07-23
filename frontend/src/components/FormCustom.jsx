import React, { useState,useEffect } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import TextField from './TextField';
import Creatable from 'react-select/creatable';
import { addProduct } from './product';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
];

function FormCustom(props) {

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    
    const { t } = useTranslation()
    const categories = [
        {label:t('appliances'),value:1},
        {label:t('books'),value:2},
        {label:t('clothes'),value:3},
        {label:t('miscellaneous'),value:4}
    ];
  
    useEffect(() => {
      document.body.dir = currentLanguage.dir || 'ltr'
      document.title = t('app_title')
    }, [currentLanguage, t]);

    const [data, setData] = useState({ name: "", desc: "", category: "", price: "", quantity: "", imageLinks: "", videoLinks: "", pdfLink: "" });
    const [errors, setErrors] = useState({});
    const [categoryValue,setCategoryValue]=useState('');
    function changeHandler(ce, value) {
        setData({ ...data, [ce.target.id]: value });
    }

    var isValid = false;

    function send(e) {
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

        var imageLinksArray = imageLinks.split(',');
        imageLinksArray = imageLinksArray.map(link => link.trim());

        if (!newErrors.imageLinks) {
            isValid = imageLinksArray.map(link => validateLinks(link)).reduce((acc, val) => acc || val) ? false : isValid;
            newErrors.imageLinks = imageLinksArray.map(link => validateLinks(link)).reduce((acc, val) => acc || val) ? "Invalid Image Link" : "";
        }

        var videoLinksArray = videoLinks.split(',');
        videoLinksArray = videoLinksArray.map(link => link.trim());

        if (videoLinks) {
            isValid= videoLinksArray.map(link => validateLinks(link)).reduce((acc, val) => acc || val) ? false : isValid;
            newErrors.videoLinks = videoLinksArray.map(link => validateLinks(link)).reduce((acc, val) => acc || val) ? "Invalid Video Link" : "";
        }

        validateLinks(pdfLink);


        function validateLinks(link) {
            var pat = new RegExp(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/
            );
            if (!pat.test(link)) {
                isValid = false;
                return true;
            }
            return false;
        }

        return newErrors;

    }

    function handleChange(value){
        setCategoryValue(value);
        if(value)
            setData({ ...data, 'category': value.label });
    }

    return (
        <div className="mx-auto">
            <Form>
                <Container className="formCenter">
                    <div>
                        <TextField
                            id="name"
                            name={t('name')}
                            placeholder={t('enter_name')}
                            input={changeHandler}
                            isInvalid={!!errors.name}
                            error={errors.name}
                        />
                        <Form.Group className="mb-3 required">
                            <Form.Label className="control-label">{t('description')}</Form.Label>
                            <Form.Control
                                id="desc"
                                as="textarea"
                                placeholder={t('enter_description')}
                                style={{ height: '100px' }}
                                onChange={(e) => changeHandler(e, e.target.value)}
                                isInvalid={!!errors.desc}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.desc}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 required">
                            <Form.Label className="control-label">{t('category')}</Form.Label>
                                <Creatable
                                    id="category"
                                    isClearable
                                    onChange={(value)=>handleChange(value)}
                                    options={categories}
                                    value={categoryValue}
                                    
                                />
                                <Form.Control className ='zeroheight'
                                    isInvalid={!!errors.category}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.category}</Form.Control.Feedback>
                        </Form.Group>

                        <TextField
                            id="price"
                            name={t('price')}
                            placeholder={t('enter_price')}
                            input={changeHandler}
                            isInvalid={!!errors.price}
                            error={errors.price}
                        />

                        <TextField
                            id="quantity"
                            name={t('quantity')}
                            placeholder={t('enter_quantity')}
                            input={changeHandler}
                            isInvalid={!!errors.quantity}
                            error={errors.quantity}
                        />

                        <TextField
                            id="imageLinks"
                            name={t('image')}
                            placeholder={t('enter_image')}
                            input={changeHandler}
                            isInvalid={!!errors.imageLinks}
                            error={errors.imageLinks}
                        />

                        <TextField
                            id="videoLinks"
                            name={t('video')}
                            placeholder={t('enter_video')}
                            input={changeHandler}
                            isInvalid={!!errors.videoLinks}
                            error={errors.videoLinks}
                        />
                        <TextField
                            name={t('pdf')}
                            placeholder={t('enter_pdf')}
                            id="pdfLink"
                            input={changeHandler}
                            isInvalid={!!errors.pdfLink}
                            error={errors.pdfLink}
                        />
                        <Button variant="dark" type="submit" onClick={send}>
                        {t('add')}
                        </Button>
                    </div>
                </Container>

            </Form>
        </div>
    );
}

export default FormCustom;