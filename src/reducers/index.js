import { combineReducers } from "redux";
import tasksReducer from './tasksReducer';
import visibilityReducer from './visibilityReducer';
import optionsReducer from './optionsReducer';

const rootReducer = combineReducers({
  tasksReducer: tasksReducer,
	visibilityReducer: visibilityReducer,
	optionsReducer: optionsReducer
});

export default rootReducer;
