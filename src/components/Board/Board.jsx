import React from 'react';
import BoardSpace from '../BoardSpace/BoardSpace.jsx';
import './Board.css';

const Board = (props) => {
  return (
    <div className='uk-grid uk-grid-large uk-text-center' data-uk-grid-match uk-grid="masonry: true">
      {props.possibleTime.map(time => {
        return (
          <BoardSpace
            key={time.id}
            possibleTime={time}
            tasks={props.tasks}
            markAsDone={props.markAsDone}
            deleteTask={props.deleteTask}
            visibilityFilter={props.visibilityFilter}
            inDeleteMode={props.inDeleteMode}/>
        );
      })}
    </div>
  );
}

export default Board;
