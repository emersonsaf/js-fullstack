import React, { useState } from 'react';

import { Button, Image, Table } from 'react-bootstrap';
import moment from 'moment';
import styled from 'styled-components';

import { useApi } from '../../hooks/useApi';
import ModalForm from './ModalForm';

import PortfolioForm from './PortfolioForm';

import { deleteItem, editItem, addItem } from '../../services/api'


const PortfolioList = () => {

    const handleDel = (slug) => {
        deleteItem(slug);
        alert(`${slug} Success Delete`);

    }

    const handleAdd = (slug, data) => {
        addPortfolioItem(data);
    }

    const handleEdit = (slug, data) => {
        editPortfolioItem(slug, data)

    }


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [image, setImage] = useState('');
    const [slug, setSlug] = useState('');
    const [tech, setTech] = useState('');

    const [action, setAction] = useState({
        del: {
            header: 'Confirm Delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm',
            showBody: true,
            body: 'Are you sure to delete it?',
            callBack: handleDel
        },
        edit: {
            header: `Edit`,
            btnVariant: 'info',
            btnLabel: 'Save',
            showBody: false,
            callBack: handleEdit,
        },
        add: {
            header: 'Add a new Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            showBody: false,
            callBack: handleAdd,
        }
    });

    const [currentAction, setCurrentAction] = useState({
        header: '',
        btnVariant: '',
        btnLabel: '',
        showBody: '',
    });

    const [show, setShow] = useState(false);
    const { data } = useApi('/portfolio');


    const handleShow = (portfolio, actn) => {
        setCurrentAction(actn);
        setShow(true);
        setTitle(portfolio?.title || '');
        setDescription(portfolio?.description || '');
        setLongDescription(portfolio?.longDescription || '');
        setImage(portfolio?.image || '');
        setSlug(portfolio?.slug || '');
        setTech(portfolio?.technologies || []);
    }

    const addPortfolioItem = (data) => {
        const tech = data.tech.map(i => {
            delete i._id
            return i
        })

        const newPortfolioItem = {
            title: data.title,
            description: data.description,
            longDescription: data.longDescription,
            image: data.image,
            technologies: tech
        }
        addItem(newPortfolioItem);
    }

    const editPortfolioItem = (slug, data) => {
        const tech = data.tech.map(i => {
            delete i._id
            return i
        })
        const newPortfolioItem = {
            title: data.title,
            description: data.description,
            longDescription: data.longDescription,
            image: data.image,
            technologies: tech
        }
        editItem(slug, newPortfolioItem);
    }

    return (
        <div>
            <Button variant="primary"
                onClick={() => { handleShow(null, action.add) }}
                size='lg'
            >
                Add Portfolio
                </Button>
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
                            <tr key={portfolio.slug}>
                                <td>
                                    <Preview src={portfolio.image} thumbnail />
                                </td>
                                <td>{portfolio.title}</td>
                                <td>{moment(portfolio.createdAt).format('DD/MM/YYYY')}</td>
                                <td>
                                    <Button variant="info" onClick={() => { handleShow(portfolio, action.edit) }}>Edit</Button>{' '}
                                    <Button variant="danger" onClick={() => { handleShow(portfolio, action.del) }}>Delete</Button>{' '}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>


            <ModalForm show={show} setShow={setShow} currentAction={currentAction} slug={slug} >
                {currentAction.showBody ?
                    currentAction.body :
                    (<PortfolioForm
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        longDescription={longDescription}
                        setLongDescription={setLongDescription}
                        image={image}
                        setImage={setImage}
                        slug={slug}
                        tech={tech}
                        setTech={setTech}
                    />)}
            </ModalForm>

        </div>
    )
}

const Preview = styled(Image)`
   height: 100px;
`;

export default PortfolioList;