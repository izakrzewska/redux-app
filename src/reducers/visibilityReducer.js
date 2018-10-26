import * as actionTypes from '../actions/actionTypes';

const initialState = {
  visibilityFilter: {
        description: 'all tasks',
        id: 'all'
      },
  visibilityOptions: [
    {
      description: 'all tasks',
      id: 'all'
    },
    {
      description: 'done',
      id: 'done'
    },
    {
      description: 'to do',
      id: 'todo'
    }
  ]
}

const chooseVisibility = (state, action) => {
	return Object.assign({}, state, {
		visibilityFilter: Object.assign({}, state.visibilityFilter, {
      description: action.visibilityFilter.description,
      id: action.visibilityFilter.id
    })
	})
}

export default function reducer(state = initialState, action) {
	switch ( action.type ) {
				case actionTypes.CHOOSE_VISIBILITY:
					return chooseVisibility(state, action);
				default:
					return state;
	}
}
