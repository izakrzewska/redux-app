import * as actionTypes from './actionTypes';
import uuid from 'uuid';

export const addTask = (taskBody, time) => {
  return {
    type: actionTypes.ADD_TASK,
    taskBody: taskBody,
    time: time,
    id: uuid()
  }
}

export const markAsDone = (id) => {
  return {
    type: actionTypes.MARK_AS_DONE,
    id: id
  }
}

export const deleteTask = (id) => {
  return {
    type: actionTypes.DELETE_TASK,
    id: id
  }
}

export const chooseTime = (timeChosen) => {
  return {
    type: actionTypes.CHOOSE_TIME,
    timeChosen: timeChosen
  }
}

export const setTaskBody = (taskBody) => {
  return {
    type: actionTypes.SET_TASK_BODY,
    taskBody: taskBody
  }
}

export const clearInput = () => {
  return {
    type: actionTypes.CLEAR_INPUT
  }
}

export const chooseVisibility = (visibilityFilter) => {
  return {
    type: actionTypes.CHOOSE_VISIBILITY,
    visibilityFilter: visibilityFilter
  }
}

export const enableDeleteMode = () => {
  return {
    type: actionTypes.ENABLE_DELETE_MODE
  }
}
