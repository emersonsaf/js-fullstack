import React, { useState } from 'react';

import { Form, Container, CardColumns, Card, Button, Col, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioForm = ({ title, setTitle, description, setDescription, longDescription, setLongDescription, image, setImage, tech, setTech }) => {

    const [type, setType] = useState('');
    const [icon, setIcon] = useState('');
    const [label, setLabel] = useState('');


    const handleRemoveItem = (id) => {
        const newTech = tech.filter(el => el._id !== id);
        setTech(newTech);
    }

    const handleAddItem = () => {
        if (type.length > 0 && label.length > 0 && icon.length > 0) {
            const newId = Math.random().toString(36).substring(7);
            const newTech = {
                iconType: type,
                icon, label,
                _id: newId
            }
            setTech([...tech, newTech]);

            setType('');
            setIcon('');
            setLabel('');
        }
    }

    return (
        <Container>
            <Form
                onSubmit={() => {
                }}
            >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Long Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        style={{ resize: 'none' }}
                        rows={5} size='sm'
                        value={longDescription}
                        onChange={(e) => { setLongDescription(e.target.value) }}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>URL image</Form.Label>
                    <Form.Control
                        type="text"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </Form.Group>
            </Form>

            <CardColumns>
                {tech && tech.map((technology) => {
                    return (
                        <Card key={technology.icon}>
                            <Card.Body>
                                <Card.Text>
                                    <FontAwesomeIcon icon={[technology.iconType, technology.icon]} size='3x' /> {technology.label}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button size='sm' variant='danger' onClick={() => { handleRemoveItem(technology._id) }}>Remover</Button>
                            </Card.Footer>
                        </Card>
                    )
                })}
            </CardColumns>

            <Form inline
                onSubmit={(e) => {
                    e.preventDefault(true);
                }}
            >
                <Row>
                    <Col xs='auto'>
                        <Form.Control placeholder='Type: fab, fas' value={type} onChange={(e) => { setType(e.target.value) }} />
                    </Col>
                    <Col xs='auto'>
                        <Form.Control placeholder='Icon: github, database' value={icon} onChange={(e) => { setIcon(e.target.value) }} />
                    </Col>
                    <Col xs='auto'>
                        <Form.Control placeholder='Label: Github, MongoDB' value={label} onChange={(e) => { setLabel(e.target.value) }} />
                    </Col>
                    <Col xs='auto'>
                        <Button className='mb-2' onClick={handleAddItem}>Add</Button>
                    </Col>

                </Row>
            </Form>

        </Container>

    )
}

export default PortfolioForm;