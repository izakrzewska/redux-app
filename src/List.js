import React from 'react';

const List = (props) => {
  return (
    <ul>
      {props.tasks.map((item, index) => {
        return (
          <li key={index + 1}>
            {item.taskBody}
          </li>
        )
      })}
    </ul>
  );
}

export default List;
