import React, {useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import {MdFileDownload} from "react-icons/md";

export default function DocumentViewer({
  showDownloadBtn=true,
  document,
  show,
  setShow,
  handleClose = () => setShow(false),
  title = "Document Viewer",
}) {
    useEffect(() => {
        console.log(document);
    });

    const handleDownload = () => {
        console.log("Downloaded")
    }
   return (
    <Modal dialogClassName="animated zoomIn" show={show} onHide={handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <embed
              style={{objectFit: 'contain'}}
              src={document}
              width="100%"
              id='DocumentViewer'
              className='height-100vh-210p min-height-100vh-200p bg-animation'
              onLoad={(e) => {
                  e.target.className = 'height-100vh-210p min-height-450 bg-white';
              }}
          />
      </Modal.Body>
      <Modal.Footer>
          {showDownloadBtn && <a
              href={document}
              download="Document"
              target="_blank"
              rel="noreferrer"
              className='m-0 p-0'
          >
              <button className='btn btn-sm btn-primary mb-0 me-1' onClick={handleDownload}>
                  <MdFileDownload size={18}/> Download Document
              </button>
          </a>}
        <button className='btn btn-sm btn-secondary m-0' onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
