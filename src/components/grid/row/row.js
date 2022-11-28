import React from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import { GridSize } from '../../../constants/grid';
import {
  extraSmall,
  extraLarge,
  large,
  medium,
  row,
  small,
  wrapMobile,
} from './row.module.scss';

const gridMap = {
  [GridSize.MEDIUM]: medium,
  [GridSize.LARGE]: large,
  [GridSize.EXTRA_LARGE]: extraLarge,
  [GridSize.EXTRA_SMALL]: extraSmall,
  [GridSize.SMALL]: small,
};

function Row(props) {
  const {
    className, children, size, wrapXs,
  } = props;
  const rowClass = classnames(className, row, gridMap[size], {
    [wrapMobile]: wrapXs,
  });

  return <div className={rowClass}>{children}</div>;
}

export default Row;

Row.defaultProps = {
  size: GridSize.MEDIUM,
  className: '',
  wrapXs: false,
};

Row.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  wrapXs: PropTypes.bool,
};
