import React from 'react';
import BoardSpace from './BoardSpace.jsx';
import './Board.css';

const Board = (props) => {
  return (
    <div className='board'>
      {props.possibleTime.map(time => {
        return (
          <BoardSpace
            key={time.id}
            possibleTime={time}
            tasks={props.tasks}
            markAsDone={props.markAsDone}
            deleteTask={props.deleteTask}
            visibilityFilter={props.visibilityFilter} />
        )
      })}
    </div>
  );
}

export default Board;
