import React from 'react';
import './BoardSpace.css';

const BoardSpace = (props) => {
  return (
    <div className='board__space'>
      <h2>{props.possibleTime.description}</h2>
      <ul>
        {props.tasks.map((item, index) => {
          console.log(item, props.possibleTime, 'do poronania ')
          if (item.time.id === props.possibleTime.id) {
          return (
            <li
              className={item.done ? 'task--done' : ''}
              key={index + 1}>
              <span>{item.taskBody}</span>
              <button onClick={() => props.markAsDone(item.id)}>Done</button>
              <button onClick={() => props.deleteTask(item.id)}>Delete</button>
            </li>
          )} else {
            return null
          }
        })}
      </ul>
    </div>
  );
}

export default BoardSpace;
