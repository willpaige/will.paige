import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  button,
  isActive
} from './button.module.scss';

function Button(props) {
  const {
    className, children, onClick, active
  } = props;
  const buttonClass = classnames(button, className, {
    [isActive]: active
  });

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  active: false
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool
};

export default Button;
