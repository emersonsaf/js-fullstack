import React, { useState } from 'react';

import { Button, Image, Table, Modal } from 'react-bootstrap';
import moment from 'moment';
import styled from 'styled-components';

import { useApi } from '../../hooks/useApi';
import ModalForm from './ModalForm';

import PortfolioForm from './PortfolioForm';


const PortfolioList = () => {
    const [action, setAction] = useState({
        del:{
            header: 'Confirm Delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm',
            body: 'Are you sure to delete it?'
        },
        edit:{
            header: `Edit`,
            btnVariant: 'info',
            btnLabel: 'Save',
            body: <PortfolioForm />
        },
        add: {
            header: 'Add a new Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            body: <PortfolioForm />
        }
    });

    const [currentAction, setCurrentAction] = useState({
            header: '',
            btnVariant: '',
            btnLabel: '',
            body: ''
    });

    const [show, setShow] = useState(false);
    const { data } = useApi('/portfolio');


    const handleShow = (slug, actn) => {
        console.log(actn)
        setCurrentAction(actn);
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
                                    <Button variant="info" onClick={() => { handleShow(portfolio.slug, action.edit) }}>Edit</Button>{' '}
                                    <Button variant="danger" onClick={() => { handleShow(portfolio.slug, action.del) }}>Delete</Button>{' '}
                                </td>
                            </tr>
                        )
                    })}
                    <Button variant="primary" onClick={() => { handleShow('', action.add) }}>Add Portfolio</Button>{' '}
                </tbody>
            </Table>


            <ModalForm show={show} setShow={setShow} currentAction={currentAction} >
                {currentAction.body}
            </ModalForm>

        </div>
    )
}

const Preview = styled(Image)`
   height: 100px;
`;

export default PortfolioList;