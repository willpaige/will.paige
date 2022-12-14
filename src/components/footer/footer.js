import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Row from '../grid/row/row';
import Col from '../grid/col/col';
import Title from '../title/title';
import { GridSize } from '../../constants/grid';
import { codeNoMarginLeft, codeTag } from '../code/code.module.scss';
import {
  content, footerRow, colXs, rowMdXs, colMdXs,
} from './footer.module.scss';
import CurrentEmployment from '../currentEmployment/currentEmployment';
import Languages from '../languages/languages';
import FooterSmall from '../footerSmall/footerSmall';

function Footer(props) {
  const { showCurrentEmployment, showLanguages, showWebsite } = props;

  return (
    <footer className={footerRow}>
      {showLanguages && (
        <Row size={GridSize.SMALL}>
          <Col size={GridSize.SMALL}>
            <div className={content}>
              <Title type="h2">Languages</Title>
              <p>Some, but not all, of the languages and associated technologies that I work with:</p>
              <Languages />
            </div>
          </Col>
        </Row>
      )}
      <Row className={classnames(footerRow, rowMdXs)} isColumnSm size={GridSize.SMALL}>
        {showCurrentEmployment && (
          <Col className={colMdXs} size={GridSize.SMALL}>
            <div className={content}>
              <Title type="h2">Current Employment</Title>
              <CurrentEmployment />
            </div>
          </Col>
        )}
        {showWebsite && (
          <Col className={classnames(colXs, colMdXs)} size={GridSize.SMALL}>
            <div className={content}>
              <Title type="h2">This Website</Title>
              <p>
                This website is built using the blazing fast
                <code className={codeTag}>GatsbyJs</code>
              </p>
              <p>
                <code className={classnames(codeTag, codeNoMarginLeft)}>GatsbyJs</code>
                {' '}
                is an open source framework with performance, scalability and security built in.
                You&apos;ll notice that when navigating this site, pages will load instantly.
                Just how it should be.
              </p>
              <p>
                Don't believe me?
                {' '}
                <Link to="/performance/" title="View will.paige.me.uk's website performance">Check out these lighthouse performance reports</Link>
              </p>
              <p>
                As well as GatsbyJs this website uses
                <code className={codeTag}>React</code>
                {' '}
                for building its interface and
                <code className={codeTag}>Redux</code>
                {' '}
                for its state management.
              </p>
            </div>
          </Col>
        )}
      </Row>
      <FooterSmall />
    </footer>
  );
}

Footer.defaultProps = {
  showCurrentEmployment: true,
  showLanguages: true,
  showWebsite: true,
};

Footer.propTypes = {
  showCurrentEmployment: PropTypes.bool,
  showLanguages: PropTypes.bool,
  showWebsite: PropTypes.bool,
};

export default Footer;
