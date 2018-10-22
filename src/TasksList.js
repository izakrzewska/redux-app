import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import Board from './Board.jsx';
import AddForm from './AddForm.jsx';

class TasksList extends Component {

  render() {

    return (
      <React.Fragment>
        <AddForm
          addTask={this.props.addTask}
          posssibleTime={this.props.posssibleTime}/>
          <Board
            posssibleTime={this.props.posssibleTime}
            tasks={this.props.tasks}
            markAsDone={this.props.markAsDone}
            deleteTask={this.props.deleteTask}
          />
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state.mainReducer)
  return {
    tasks: state.mainReducer.tasks,
    posssibleTime: state.mainReducer.posssibleTime
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
      addTask: (taskBody, time) => dispatch(actions.addTask(taskBody, time)),
      markAsDone: (id) => dispatch(actions.markAsDone(id)),
      deleteTask: (id) => dispatch(actions.deleteTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
