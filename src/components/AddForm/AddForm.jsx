import React from 'react';

const AddForm = (props) => {

  return (
    <form
      className='uk-margin-bottom'>
      <div className='uk-inline uk-margin-bottom'>
        <a className="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
        <input
          className='uk-input uk-form-width-medium'
          id='taskBodyInput'
          type='text'
          value={props.taskBody}
          onChange = {(event) => props.setTaskBody(event.target.value)}
          autoFocus />
          <button
            className='uk-button uk-button-primary'
            type='submit'
            onClick={(event) => {
              event.preventDefault();
              if (props.taskBody !== '') {
                props.addTask(props.taskBody, props.timeChosen)
                props.clearInput()
              }}}>
          Add task
          </button>
        </div>
        <div className='uk-margin-bottom'>
          {props.possibleTime.map(time => {
            return (
              <label
                className='uk-margin-left radio-button__label uk-text-emphasis'
                key={time.id}
                htmlFor={time.id}>
                <input
                  type="radio"
                  className='uk-radio radio-button'
                  data-description={time.description}
                  name="possibleTime"
                  value={time.id}
                  id={time.id}
                  onChange={(event) => props.chooseTime({description: event.target.dataset.description, id: event.target.id})}
                  defaultChecked={time.id === 'today'} />
                {time.description}
              </label>
            );
          })}
        </div>
    </form>
  );
}

export default AddForm;
