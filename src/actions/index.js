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
