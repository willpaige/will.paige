import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { grid, isFullWidthSm, noPaddingRight } from './grid.module.scss';

function Grid(props) {
  const { children, className, fullWidthSm, removeRightPadding } = props;
  const gridClassName = classnames(grid, className, {
    [isFullWidthSm]: fullWidthSm,
    [noPaddingRight]: removeRightPadding,
  });

  return <div className={gridClassName}>{children}</div>;
}

export default Grid;

Grid.defaultProps = {
  className: '',
  fullWidthSm: false,
  removeRightPadding: false,
};

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullWidthSm: PropTypes.bool,
  removeRightPadding: PropTypes.bool,
};
