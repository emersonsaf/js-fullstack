import React, { useEffect, useState } from 'react';

import { Container, Card } from 'react-bootstrap';
import { useApi } from '../../hooks/useApi';

const WellcomeTab = () => {
    const data = useApi('/portfolio');

    const [qtdItems, setQtdItems] = useState(0);

    useEffect(() => {
        data && setQtdItems(data?.data?.data?.length)
    }, [data])

    return (
        <Container>
            <Card bg='dark' text='light' className='mb-2 text-center p-3' >
                <Card.Header>Wellcome</Card.Header>
                <Card.Body>
                    <Card.Title>Item on our Portfolio</Card.Title>
                    <Card.Text style={{ fontSize: '100' }}>{qtdItems}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default WellcomeTab;