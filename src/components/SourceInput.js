import React, { Component } from 'react';
import { connect } from 'react-redux';

class SourceInput extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    alert("test");
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Input link here...." style={{width:'70%'}} />
        <input type="button" value="CONVERT" onClick={this.handleClick} />
      </div>
    );
  }
}

export default connect()(SourceInput);
