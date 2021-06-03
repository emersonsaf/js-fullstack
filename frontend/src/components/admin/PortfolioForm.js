import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const PortfolioForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [image, setImage] = useState('');

    return (
        <Form
            onSubmit={()=>{
            }}
        >
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Long Description</Form.Label>
                <Form.Control as="textarea" style={{resize: 'none'}} rows={5} size='sm'  value={longDescription} onChange={(e) => { setLongDescription(e.target.value) }} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>URL image</Form.Label>
                <Form.Control type="text"  value={image} onChange={(e) => { setImage(e.target.value) }} />
            </Form.Group>
        </Form>
    )
}

export default PortfolioForm;