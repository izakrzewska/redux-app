import React from 'react';
import './DeleteForm.css';

const DeleteForm = (props) => {
  return (
    <div className='delete-form'>
      <span
        onClick={() => props.enableDeleteMode()} 
        uk-icon="trash"></span>
    </div>
  );
}

export default DeleteForm;
