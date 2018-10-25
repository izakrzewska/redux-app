import * as actionTypes from '../actions/actionTypes';

const initialState = {
  visibilityFilter: {
        description: 'All tasks',
        id: 'all'
      },
  visibilityOptions: [
    {
      description: 'All tasks',
      id: 'all'
    },
    {
      description: 'Done',
      id: 'done'
    },
    {
      description: 'To do',
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
