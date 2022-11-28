import React from 'react';
import './app.scss';
import PropTypes from 'prop-types';
import Theme from '../theme/theme';
import Wrapper from '../wrapper/wrapper';
import Navigation from '../navigation/navigation';
import ThemeSwitch from '../themeSwitch/themeSwitch';
import { themeMap } from '../../constants/theme';

function App(props) {
  const { children, theme, activePage } = props;

  return (
    <Theme theme={theme}>
      <Wrapper>
        <ThemeSwitch />
        <Navigation activePage={activePage} />
        <main>
          {children}
        </main>
      </Wrapper>
    </Theme>
  );
}

App.defaultProps = {
  theme: themeMap.TEA_GREEN,
};

App.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
  activePage: PropTypes.string.isRequired,
};

export default App;
