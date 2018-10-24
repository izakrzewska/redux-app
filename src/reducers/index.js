import * as actionTypes from '../actions/actionTypes';

const initialState = {
	possibleTime: [
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
	timeChosen: {
		description: 'today',
		id: 'today'
	},
	taskBody: '',
	visibilityFilter: 'all',
	visibilityOptions: ['done', 'todo', 'all']
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
				return (action.id !== task.id)
			})
	})
}

const chooseTime = (state, action) => {
	return Object.assign({}, state, {
		timeChosen: Object.assign({}, state.timeChosen, {
			description: action.timeChosen.description,
			id: action.timeChosen.id
		})
	})
}

const setTaskBody = (state, action) => {
	return Object.assign({}, state, {
		taskBody: action.taskBody
	})
}

const clearInput = (state, action) => {
	return Object.assign({}, state, {
		taskBody: '',
		timeChosen: Object.assign({}, state.timeChosen, {})
	})
}

const chooseVisibility = (state, action) => {
	return Object.assign({}, state, {
		visibilityFilter: action.visibilityFilter
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
				case actionTypes.CHOOSE_TIME:
					return chooseTime(state, action);
				case actionTypes.SET_TASK_BODY:
					return setTaskBody(state, action);
				case actionTypes.CLEAR_INPUT:
					return clearInput(state, action);
				case actionTypes.CHOOSE_VISIBILITY:
					return chooseVisibility(state, action);
				default:
					return state;
	}
}
