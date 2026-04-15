'use client';

import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { wrapper, noPaddingRight } from './wrapper.module.scss';
import { getActivePage } from '../../state/navigation/navigation-selectors';
import { PAGES } from '../../constants/pages';

function Wrapper({ children }) {
  const activePage = useSelector(getActivePage);
  const wrapperClass = classnames(wrapper, {
    [noPaddingRight]: activePage === PAGES.PROJECTS,
  });

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  );
}

export default Wrapper;
