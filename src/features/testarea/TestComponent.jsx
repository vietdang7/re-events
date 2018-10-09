import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testActions';

class TestComponent extends Component {
  render() {
    const {incrementCounter, decrementCounter,data} = this.props;
    return (
      <div>
        <h1>Test area</h1>
        <h3> The answer is: {data} </h3>
        <Button onClick={incrementCounter} content="+"/>
        <Button onClick={decrementCounter} content="-"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({data: state.test.data})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
