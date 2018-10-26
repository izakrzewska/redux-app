import React from 'react';
import './VisibilityOptionForm.css';

const VisibilityOptionForm = (props) => {
  return (
    <div className='visibility-option-form'>
    <form >
      {props.visibilityOptions.map(filter => {
        return (
            <label
              key={filter.id}
              htmlFor={filter.id}
              className='uk-margin-left radio-button__label uk-text-emphasis'>
              <input
                type="radio"
                className='uk-radio radio-button'
                name="visibilityOptions"
                data-description={filter.description}
                value={filter.id}
                id={filter.id}
                onChange={(event) => props.chooseVisibility({description: event.target.dataset.description, id: event.target.id})}
                defaultChecked={filter.id === props.visibilityFilter.id}/>
              {filter.description}
            </label>
        );
      })}
    </form>
    </div>
  );
}

export default VisibilityOptionForm;
