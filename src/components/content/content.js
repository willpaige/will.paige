import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  content, teaGreen, laurelGreen, cambridgeBlue, taupeGray, oldLavender, noMargin
} from './content.module.scss';
import { themeMap } from '../../constants/theme';
import { getActiveTheme } from '../../state/ui/ui-selectors';

const contentThemes = {
  [themeMap.TEA_GREEN]: teaGreen,
  [themeMap.LAUREL_GREEN]: laurelGreen,
  [themeMap.CAMBRIDGE_BLUE]: cambridgeBlue,
  [themeMap.TAUPE_GRAY]: taupeGray,
  [themeMap.OLD_LAVENDER]: oldLavender,
};

function Content(props) {
  const { className, activeTheme, children, noHero } = props;

  const contentClassName = classNames(content, className, contentThemes[activeTheme], {
    [noMargin]: noHero,
  });

  return (
    <div className={contentClassName}>
      {children}
    </div>
  );
}

Content.defaultProps = {
  noHero: false,
  className: '',
};

Content.propTypes = {
  activeTheme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  noHero: PropTypes.bool,
};

export default connect(
  (state) => {
    return {
      activeTheme: getActiveTheme(state),
    };
  },
  null,
)(Content);
