import React from 'react';

const AddForm = (props) => {
  let taskBody = '';
  let time = {};

  return (
    <div>
      <input
        id='taskBodyInput'
        type='text'
        onKeyDown={(event) => {
            taskBody = event.target.value;

            if ((taskBody !== '') && (event.key === 'Enter')) {
              props.addTask(taskBody, time = {id: 'today', description: 'today'});
              event.target.value = ''
            }
            }}
          autoFocus />
        <div>
          {props.posssibleTime.map(time => {
            return (
              <label key={time.id} htmlFor={time.id}>
                <input type="radio" name="posssibleTime" value={time.id} id={time.id} defaultChecked={time.id === 'today'} />
                {time.description}
              </label>
            );
          })}
        </div>
        <button onClick={() => {
            if (taskBody !== '') {
              props.addTask(taskBody, time = {id: 'today', description: 'today'})
              document.getElementById('taskBodyInput').value = '';
            }
          }}>Add task</button>
        </div>
  );
}

export default AddForm;
