import React from 'react';
import './Task.css';

const Task = (props) => {
  return (
    <span
      className={props.task.done ? 'task--done task' : 'task'}
      key={props.index + 1} >
      <span
        onClick={() => props.markAsDone(props.task.id)}
        className='task__text'>
        {props.task.taskBody}
      </span>
      {props.inDeleteMode ?
        <button
          className='task__delete'
          onClick={() => props.deleteTask(props.task.id)}>
          <span uk-icon="close"></span>
        </button> :
        null
      }
    </span>
  );
}

export default Task;
