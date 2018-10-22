import * as actionTypes from '../actions/actionTypes';

const initialState = {
	posssibleTime: [
		{
			description: 'today',
			id: 'today'
		},
		{
			description: 'tomorrow',
			id: 'tomorrow'
		},
		{
			description: 'next week',
			id: 'nextWeek'
		},
		{
			description: 'some day',
			id: 'someDay'
		},
	],
	tasks: [],
	taskBody: ''
};

const addTask = (state, action) => {
	return Object.assign({}, state, {
		tasks: [
			...state.tasks,
			{
				taskBody: action.taskBody,
				done: false,
				id: action.id,
				time: action.time
			}
		]
	});
}

const markAsDone = (state, action) => {
	return Object.assign({}, state, {
		tasks: state.tasks.map(task => {
			if (task.id === action.id) {
				return Object.assign({}, task, {
					done: !task.done
				});
			}
			return task
		})
	})
}

const deleteTask = (state, action) => {
	return Object.assign({}, state, {
		tasks: state.tasks.filter(task => {
			if (action.id !== task.id) {
				return task
			}
			return task
		})
	})
}

export default function reducer(state = initialState, action) {
	switch ( action.type ) {
				case actionTypes.ADD_TASK:
					return addTask(state, action);
				case actionTypes.MARK_AS_DONE:
					return markAsDone(state, action);
				case actionTypes.DELETE_TASK:
					return deleteTask(state, action);
				default:
					return state;
	}
}
