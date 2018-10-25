import React from 'react';
import './BoardSpace.css';
import Task from '../Task/Task';

const BoardSpace = (props) => {
  return (
    <div className='uk-width-1-2'>
      <div className='uk-card uk-card-default uk-card-hover uk-card-body'>
        <h2 className='uk-card-title'>{props.possibleTime.description}</h2>
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
                  inDeleteMode={props.inDeleteMode}
                  />
              );
            } else if ((props.visibilityFilter.id === 'todo') && (!task.done)) {
              return (
                <Task
                  key={index}
                  task={task}
                  index={index}
                  markAsDone={props.markAsDone}
                  deleteTask={props.deleteTask}
                  inDeleteMode={props.inDeleteMode}
                  />
              );
            } else if (props.visibilityFilter.id === 'all') {
              return (
                <Task
                  key={index}
                  task={task}
                  index={index}
                  markAsDone={props.markAsDone}
                  deleteTask={props.deleteTask}
                  inDeleteMode={props.inDeleteMode}
                  />
              );
            }
          }
          return null
        })}
      </div>
    </div>
  );
}

export default BoardSpace;
