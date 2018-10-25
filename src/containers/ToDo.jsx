import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Board from '../components/Board/Board.jsx';
import AddForm from '../components/AddForm/AddForm.jsx';
import VisibilityOptionForm from '../components/VisibilityOptionForm/VisibilityOptionForm.jsx';
import DeleteForm from '../components/DeleteForm/DeleteForm.jsx';

class TasksList extends Component {

  render() {
    return (
      <React.Fragment>
        <DeleteForm
          enableDeleteMode={this.props.enableDeleteMode}/>
        <VisibilityOptionForm
          visibilityOptions={this.props.visibilityOptions}
          chooseVisibility={this.props.chooseVisibility}
          visibilityFilter={this.props.visibilityFilter} />
        <AddForm
          addTask={this.props.addTask}
          possibleTime={this.props.possibleTime}
          timeChosen={this.props.timeChosen}
          chooseTime={this.props.chooseTime}
          setTaskBody={this.props.setTaskBody}
          taskBody={this.props.taskBody}
          clearInput={this.props.clearInput}
          />
          <Board
            possibleTime={this.props.possibleTime}
            tasks={this.props.tasks}
            markAsDone={this.props.markAsDone}
            deleteTask={this.props.deleteTask}
            visibilityFilter={this.props.visibilityFilter}
            inDeleteMode={this.props.inDeleteMode}
          />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
    possibleTime: state.optionsReducer.possibleTime,
    timeChosen: state.optionsReducer.timeChosen,
    taskBody: state.optionsReducer.taskBody,
    visibilityFilter: state.visibilityReducer.visibilityFilter,
    visibilityOptions: state.visibilityReducer.visibilityOptions,
    inDeleteMode: state.optionsReducer.inDeleteMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addTask: (taskBody, time) => dispatch(actions.addTask(taskBody, time)),
      markAsDone: (id) => dispatch(actions.markAsDone(id)),
      deleteTask: (id) => dispatch(actions.deleteTask(id)),
      chooseTime: (timeChosen) => dispatch(actions.chooseTime(timeChosen)),
      setTaskBody: (taskBody) => dispatch(actions.setTaskBody(taskBody)),
      clearInput: () => dispatch(actions.clearInput()),
      chooseVisibility: (visibilityFilter) => dispatch(actions.chooseVisibility(visibilityFilter)),
      enableDeleteMode: () => dispatch(actions.enableDeleteMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
