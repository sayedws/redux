import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handleEdit } from '../redux/action';


const EditTask = ({task}) => {
    const [action, setAction] = useState(task.action);
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const editedOne={
            id:task.id,action,isDone:task.isDone
        }
        dispatch(handleEdit(editedOne))
        closeModal()

    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }
      
  return (
    <div>
        <button onClick={openModal}>
            edit
        </button>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
<form onSubmit={handleSubmit}>
                <input type="text" value={action} onChange={e=>setAction(e.target.value)} />
                <div>
                    <button type='submit'>confirme</button>
                    <button onClick={closeModal}>cancel</button>
                </div>
            </form>
      </Modal>
    </div>
  )
}

export default EditTask