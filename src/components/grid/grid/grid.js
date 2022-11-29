import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { grid } from './grid.module.scss';

function Grid(props) {
  const { children, className } = props;
  return <div className={classnames(grid, className)}>{children}</div>;
}

export default Grid;

Grid.defaultProps = {
  className: '',
};

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
