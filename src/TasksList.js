import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';
import List from './List';

class TasksList extends Component {

  render() {

let taskBody = '';

    return (
      <React.Fragment>
        <input
          id='taskBodyInput'
          type='text'
          onKeyDown={(event) => {
              taskBody = event.target.value;

              if ((taskBody !== '') && (event.key === 'Enter')) {
                this.props.addTask(taskBody);
                event.target.value = ''
              }
              }}
              autoFocus />
            <button onClick={() => {
                this.props.addTask(taskBody)
                document.getElementById('taskBodyInput').value = '';
              }}>Add task</button>

          <List tasks={this.props.tasks} />
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    count: state.mainReducer.count,
    tasks: state.mainReducer.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addTask: (taskBody) => dispatch(actions.addTask(taskBody))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
