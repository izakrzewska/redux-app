import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import Board from './Board.jsx';
import AddForm from './AddForm.jsx';
import VisibilityOptionForm from './VisibilityOptionForm';
import PropTypes from 'prop-types';

class TasksList extends Component {

  render() {

    return (
      <React.Fragment>
        <VisibilityOptionForm
          visibilityOptions={this.props.visibilityOptions}
          chooseVisibility={this.props.chooseVisibility} />
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
          />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.mainReducer.tasks,
    possibleTime: state.mainReducer.possibleTime,
    timeChosen: state.mainReducer.timeChosen,
    taskBody: state.mainReducer.taskBody,
    visibilityFilter: state.mainReducer.visibilityFilter,
    visibilityOptions: state.mainReducer.visibilityOptions
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
      chooseVisibility: (visibilityFilter) => dispatch(actions.chooseVisibility(visibilityFilter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
