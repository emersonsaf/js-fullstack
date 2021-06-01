import React, { useState } from 'react';

import { Button, Image, Table, Modal } from 'react-bootstrap';
import moment from 'moment';
import styled from 'styled-components';

import { useApi } from '../../hooks/useApi';
import ModalForm from './ModalForm';


const PortfolioList = () => {
    const [show, setShow] = useState(false);
    const [action, setAction] = useState('');


    const { data } = useApi('/portfolio');


    const deleteAction = () => {
        setAction('Delete');
        setShow(true);
    }

    const editAction = () =>{
        setAction('Edit');
        setShow(true);
    } 


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
                                    <Button variant="info" onClick={() => {editAction()}}>Edit</Button>{' '}
                                    <Button variant="danger" onClick={() => {deleteAction()}}>Delete</Button>{' '}
                                </td>
                            </tr>
                        )
                    })}
                    <Button variant="primary">New Portfolio</Button>{' '}


                </tbody>
            </Table>

            
         <ModalForm show={show} setShow={setShow} action={action}/>

        </div>
    )
}

const Preview = styled(Image)`
   height: 100px;
`;

export default PortfolioList;