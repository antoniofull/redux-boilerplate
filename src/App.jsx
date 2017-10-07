import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateText } from './actions';

import './css/index.scss';

import Hello from './components/Hello';

class App extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.props.updateText(e.target.value);
  }

  render() {
    return (
      <div className="main">
        <Hello update={this.update} />
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

App.defaultProps = {
  text: '',
};

App.propTypes = {
  updateText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  text: state.hello.text,
});

export default connect(mapStateToProps, { updateText })(App);
