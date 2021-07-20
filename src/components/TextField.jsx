import React from 'react';
import {Form} from 'react-bootstrap';

function TextField(props) {
    return (
        <div>
            <Form.Group className="mb-3" controlId={props.controlId}>
                <Form.Label>{props.name}</Form.Label>
                <Form.Control className="inputsize" type="text" placeholder={props.placeholder} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
        </div>
    );
}

export default TextField;