import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hello from './HelloComponent';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <Hello/>
      </div>
    );
  }
}

export default connect()(RootComponent);
