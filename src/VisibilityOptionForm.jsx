import React from 'react';

const VisibilityOptionForm = (props) => {
  return (
    <div>
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

              onChange={(event) => {
                console.log('kdasda')
                props.chooseVisibility({description: event.target.dataset.description, id: event.target.id})
              }
              }
              defaultChecked={filter.id === props.visibilityFilter.id}/>
            {filter.description}
          </label>

        );
      })}
    </form>
    </div>
  );
}

export default VisibilityOptionForm;
