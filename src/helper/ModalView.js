import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ModalView({
  show, setShow, title, body, action,
}) {
  return (
    <Modal dialogClassName="animated zoomIn" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="my-0" onClick={action}>
          {title}
        </Button>
        <Button
          variant="secondary"
          className="my-0"
          onClick={() => setShow(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
