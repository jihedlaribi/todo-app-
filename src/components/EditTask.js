import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { edit } from '../action/Action';

export const EditTask = ({item}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editTask, setEditTask] = useState('');
    const dispatch = useDispatch();
    const add = () => {
        dispatch(edit(item.id,editTask));
        handleClose()
    }
    
    return (
        <div>
              <>
    
       {/* edit */}
       <i class="far fa-edit fa-2x" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type='text' className='form-control' onChange={(e) => setEditTask(e.target.value) 
            
      } value={editTask}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}
