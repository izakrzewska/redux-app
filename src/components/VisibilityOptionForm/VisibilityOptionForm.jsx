import React from 'react';

const VisibilityOptionForm = (props) => {
  return (
    <form>
      {props.visibilityOptions.map(filter => {
        return (
          <label
            key={filter.id}
            htmlFor={filter.id}>
            <input
              type="radio"
              name="visibilityOptions"
              data-description={filter.description}
              value={filter.id}
              id={filter.id}

              onChange={(event) => props.chooseVisibility({description: event.target.dataset.description, id: event.target.id})}
              defaultChecked={filter.id === props.visibilityFilter.id}/>
            {filter.description}
          </label>

        );
      })}
    </form>
  );
}

export default VisibilityOptionForm;
