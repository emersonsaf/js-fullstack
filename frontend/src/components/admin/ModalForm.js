import React from 'react';

import { Button, Modal } from 'react-bootstrap';
import PortfolioForm from './PortfolioForm';

const ModalForm = ({ show, setShow, currentAction, children }) => {

    console.log(currentAction)

    return (
        <Modal
            show={show}
            onHide={() => { setShow(false) }}
            centered
            backdrop='static'
            keyboard={false}
            animation={true}
        >
            <Modal.Header>
                <Modal.Title>
                    {currentAction.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => { setShow(false) }}>
                    Close</Button>

                <Button variant={currentAction.btnVariant}
                    onClick={() => { setShow(false) }}>
                    {currentAction.btnLabel}
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default ModalForm