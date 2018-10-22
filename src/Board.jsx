import React from 'react';
import BoardSpace from './BoardSpace.jsx';
import './Board.css';

const Board = (props) => {
  return (
    <div className='board'>
      {props.posssibleTime.map(time => {
        return (
          <BoardSpace
            key={time.id}
            possibleTime={time}
            tasks={props.tasks}
            markAsDone={props.markAsDone}
            deleteTask={props.deleteTask} />
        )
      })}
    </div>
  );
}

export default Board;
