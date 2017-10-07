import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => (
  <input className="input" onKeyUp={props.update} type="text" defaultValue={props.text} />
);

Hello.defaultProps = {
  text: '',
  update: () => {},
};

Hello.propTypes = {
  text: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default Hello;
