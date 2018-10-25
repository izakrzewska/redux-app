import React from 'react';
import './BoardSpace.css';
import Task from './Task';

const BoardSpace = (props) => {

  return (
    <div
      className='board__space'>
      <h2>{props.possibleTime.description}</h2>
        {props.tasks.map((task, index) => {
          if (task.time.id === props.possibleTime.id) {
            if ((props.visibilityFilter.id === 'done') && (task.done)) {
              return (
                <Task
                  key={index}
                  task={task}
                  index={index}
                  markAsDone={props.markAsDone}
                  deleteTask={props.deleteTask}
                  />
              )
            } else if ((props.visibilityFilter.id === 'todo') && (!task.done)) {
              return (
                <Task
                  key={index}
                  task={task}
                  index={index}
                  markAsDone={props.markAsDone}
                  deleteTask={props.deleteTask}
                  />
              )
            } else if (props.visibilityFilter.id === 'all') {
              return (
                <Task
                  key={index}
                  task={task}
                  index={index}
                  markAsDone={props.markAsDone}
                  deleteTask={props.deleteTask}
                  />
              )
            }
          }
          return null
        })}
    </div>
  );
}

export default BoardSpace;
