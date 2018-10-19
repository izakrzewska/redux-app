import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.removeOne}>Remove One</button>
        <h1>Count : {this.props.count}</h1>
        <button onClick={this.props.addOne}>Add One</button>
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    count: state.mainReducer.count
  };
};

const mapDispatchToProps = dispatch => {
    return {
        addOne: () => dispatch(actions.addOne()),
        removeOne: () => dispatch(actions.removeOne())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
