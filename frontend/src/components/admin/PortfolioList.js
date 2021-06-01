import React, { useState } from 'react';

import { Button, Image, Table, Modal } from 'react-bootstrap';
import moment from 'moment';
import styled from 'styled-components';

import { useApi } from '../../hooks/useApi';


const PortfolioList = () => {
    const [show, setShow] = useState(true);

    const { data } = useApi('/portfolio');


    return (
        <div>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((portfolio) => {
                        return (
                            <tr>
                                <td>
                                    <Preview src={portfolio.image} thumbnail />
                                </td>
                                <td>{portfolio.title}</td>
                                <td>{moment(portfolio.createdAt).format('DD/MM/YYYY')}</td>
                                <td>
                                    <Button variant="info">Edit</Button>{' '}
                                    <Button variant="danger" onClick={()=>{setShow(true)}}>Delete</Button>{' '}
                                </td>
                            </tr>
                        )
                    })}
                    <Button variant="primary">New Portfolio</Button>{' '}


                </tbody>
            </Table>

            <Modal
                show={show}
                onHide={()=>{setShow(false)}}
                centered
                backdrop='static'
                keyboard={false}
                animation={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Action
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Delete Portfolio?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={()=>{setShow(false)}}>Close</Button>
                    <Button variant='danger' onClick={()=>{alert('yei')}}>Delete</Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

const Preview = styled(Image)`
   height: 100px;
`;

export default PortfolioList;