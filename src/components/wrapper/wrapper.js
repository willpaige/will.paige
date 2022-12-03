import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { wrapper, noPaddingRight } from './wrapper.module.scss';
import { getActivePage } from '../../state/navigation/navigation-selectors';
import { PAGES } from '../../constants/pages';

function Wrapper(props) {
  const { children, activePage } = props;
  const wrapperClass = classnames(wrapper, {
    [noPaddingRight]: activePage === PAGES.PROJECTS,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  activePage: PropTypes.string.isRequired,
};

export default connect(state => ({
  activePage: getActivePage(state),
}), null)(Wrapper);
