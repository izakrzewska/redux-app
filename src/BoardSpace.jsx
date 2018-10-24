import React from 'react';
import './BoardSpace.css';
import Task from './Task';

const BoardSpace = (props) => {

  return (
    <div className='board__space'>
      <h2>{props.possibleTime.description}</h2>
      <ul>
        {props.tasks.map((item, index) => {
          if (item.time.id === props.possibleTime.id) {
            if ((props.visibilityFilter === 'done') && (item.done)) {
              return (
                <Task
                  task={item}
                  index={index}
                  markAsDone={props.markAsDone}
                  deleteTask={props.deleteTask}
                  />
              )
            } else if ((props.visibilityFilter === 'todo') && (!item.done)) {
              return (
                <Task
                  task={item}
                  index={index}
                  markAsDone={props.markAsDone}
                  deleteTask={props.deleteTask}
                  />
              )
            } else if (props.visibilityFilter === 'all') {
              return (
                <Task
                  task={item}
                  index={index}
                  markAsDone={props.markAsDone}
                  deleteTask={props.deleteTask}
                  />
              )
            }
          }
          return null
        })}
      </ul>
    </div>
  );
}

export default BoardSpace;
