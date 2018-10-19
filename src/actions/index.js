import * as actionTypes from './actionTypes';

export const addOne = () => {
  return {
    type: actionTypes.INCREMENT
  }
};

export const removeOne = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const addTask = (taskBody) => {
  return {
    type: actionTypes.ADD_TASK,
    taskBody: taskBody
  }
}
