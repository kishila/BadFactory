import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Electron
      </div>
    );
  }
}

export default connect()(Hello);
