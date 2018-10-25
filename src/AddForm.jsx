import React from 'react';

const AddForm = (props) => {

  return (
    <div>
      <form>
      <input
        id='taskBodyInput'
        type='text'
        value={props.taskBody}
        onChange = {(event) =>

          {
            props.setTaskBody(event.target.value)
          }

          }
        autoFocus />
        <div>
          {props.possibleTime.map(time => {
            return (
              <label
                key={time.id}
                htmlFor={time.id}>
                <input
                  type="radio"
                  data-description={time.description}
                  name="possibleTime"
                  value={time.id}
                  id={time.id}
                  onChange={(event) => props.chooseTime({description: event.target.dataset.description, id: event.target.id})}
                  defaultChecked={time.id === 'today'}/>
                {time.description}
              </label>
            );
          })}
        </div>
        <button type='submit' onClick={(event) => {
            event.preventDefault();
            if (props.taskBody !== '') {
              props.addTask(props.taskBody, props.timeChosen)
              props.clearInput()
            }
          }}>Add task</button>


          </form>
        </div>
  );
}

export default AddForm;
