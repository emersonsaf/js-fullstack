import React from 'react';

import { Button, Modal } from 'react-bootstrap';

const ModalForm = ({ show, setShow, action }) => {

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
                    {action}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {action === 'Delete' ? 'Gostaria realmente de excluir o registro?' : 'Formulario de Edição'}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => { setShow(false) }}>
                    Close</Button>

                <Button variant={action === 'Delete' ? 'danger' : 'info'}
                    onClick={() => { setShow(false) }}> {action === 'Delete' ? 'Excluir' : 'Editar'}
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default ModalForm