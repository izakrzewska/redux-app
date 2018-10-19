import * as actionTypes from '../actions/actionTypes';

const initialState = {
	count: 45,
	tasks: [],
	taskBody: ''
};

const addOne = (state, action) => {
	return Object.assign({}, state, {
		count: state.count + 1
	})
}

const removeOne = (state, action) => {
	return Object.assign({}, state, {
		count: state.count - 1
	})
}

const addTask = (state, action) => {
	return Object.assign({}, state, {
		tasks: [
			...state.tasks,
			{
				taskBody: action.taskBody
			}
		]
	});
}

export default function reducer(state = initialState, action) {
	switch ( action.type ) {
        case actionTypes.INCREMENT:
					return addOne( state, action );
				case actionTypes.DECREMENT:
					return removeOne( state, action );
				case actionTypes.ADD_TASK:
					return addTask(state, action);
				default:
					return state;
	}
}
