import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tasks: []
}

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
				return (action.id !== task.id)
			})
	})
}

export default function tasksReducer(state = initialState, action) {
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
