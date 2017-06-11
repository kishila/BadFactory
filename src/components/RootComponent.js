import React, { Component } from 'react';
import { connect } from 'react-redux';
import Source from './SourceInput';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <Source/>
      </div>
    );
  }
}

export default connect()(RootComponent);
