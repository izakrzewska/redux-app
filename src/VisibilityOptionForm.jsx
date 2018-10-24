import React from 'react';

const VisibilityOptionForm = (props) => {
  return (
    <div>
    <form className=''>
      {props.visibilityOptions.map(filter => {
        return (
          <label
            key={filter}
            htmlFor={filter}>
            <input
              type="radio"
              name="visibilityOptions"
              value={filter}
              id={filter}
              onChange={(event) => props.chooseVisibility(event.target.value)}

            />
            {filter}
          </label>

        );
      })}
    </form>
    </div>
  );
}

export default VisibilityOptionForm;
