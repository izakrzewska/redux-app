import React from 'react';
import './Task.css';

const Task = (props) => {
  return (
    <span
      className={props.task.done ? 'task--done' : ''}
      key={props.index + 1}>
      <span>{props.task.taskBody}</span>
      <button onClick={() => props.markAsDone(props.task.id)}>Done</button>
      <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
    </span>
  );
}

export default Task;
