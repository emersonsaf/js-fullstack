import React from 'react';

import { Button, Modal } from 'react-bootstrap';

const ModalForm = ({ show, setShow, currentAction, slug, children }) => {

    const handleAction = () => {
        currentAction.callBack(slug ,children.props)
        setShow(false);
    }

    return (
        <Modal
            show={show}
            onHide={() => { setShow(false) }}
            centered
            backdrop='static'
            keyboard={false}
            animation={true}
            size='lg'

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
                    onClick={() => { handleAction() }}>
                    {currentAction.btnLabel}
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default ModalForm