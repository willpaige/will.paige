import React from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import { GridSize } from '../../../constants/grid';
import {
  medium,
  large,
  extraLarge,
  extraSmall,
  small,
  col,
} from './col.module.scss';

const gridMap = {
  [GridSize.MEDIUM]: medium,
  [GridSize.LARGE]: large,
  [GridSize.EXTRA_LARGE]: extraLarge,
  [GridSize.EXTRA_SMALL]: extraSmall,
  [GridSize.SMALL]: small,
};

function Col(props) {
  const { className, children, size } = props;
  const colClass = classnames(className, col, gridMap[size]);

  return <div className={colClass}>{children}</div>;
}

export default Col;

Col.defaultProps = {
  size: GridSize.MEDIUM,
  className: '',
};

Col.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};
