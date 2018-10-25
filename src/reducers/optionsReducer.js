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
	timeChosen: {
		description: 'today',
		id: 'today'
	},
	taskBody: '',
  inDeleteMode: false
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
		taskBody: ''
	})
}

const enableDeleteMode = (state, action) => {
  return Object.assign({}, state, {
    inDeleteMode: !state.inDeleteMode
  })
}

export default function reducer(state = initialState, action) {
	switch ( action.type ) {
				case actionTypes.CHOOSE_TIME:
					return chooseTime(state, action);
				case actionTypes.SET_TASK_BODY:
					return setTaskBody(state, action);
				case actionTypes.CLEAR_INPUT:
					return clearInput(state, action);
        case actionTypes.ENABLE_DELETE_MODE:
          return enableDeleteMode(state, action);
				default:
					return state;
	}
}
