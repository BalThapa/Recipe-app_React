import React from 'react';
import './Modal.css';

const Modal = ({onClose}) => {
    const modalHandler = () =>{
        onClose();
    };
    return (
        <div className='overlay'>
           
            <div className='modal'>
                <p className='thumbs'>👍</p>
                <h2>Adding Recipe Successful!!</h2> 
                <button className='close' onClick= {modalHandler}>OK</button>
            </div>
      </div>
       
    );
};

export default Modal;