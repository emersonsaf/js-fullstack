import React from 'react';

import { Button, Image, Table } from 'react-bootstrap';
import moment from 'moment';
import styled from 'styled-components';

import { useApi } from '../../hooks/useApi';


const PortfolioList = () => {

    const { data } = useApi('/portfolio');

    console.log(data);

    return (
        <div>
            <Table striped bordered hover variant="dark">
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
                                    <Button variant="danger">Delete</Button>{' '}
                                </td>
                            </tr>
                        )
                    })}
                    <Button variant="primary">New Portfolio</Button>{' '}


                </tbody>
            </Table>
        </div>
    )
}

const Preview = styled(Image)`
   height: 100px;
`;

export default PortfolioList;