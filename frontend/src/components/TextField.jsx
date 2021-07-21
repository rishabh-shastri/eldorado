import React from 'react';
import {Form} from 'react-bootstrap';

function TextField(props) {
    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>{props.name}</Form.Label>
                <Form.Control id={props.id} className="inputsize" type="text" placeholder={props.placeholder} onChange={e=>{props.input(e,e.target.value)}}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
        </div>
    );
}

export default TextField;