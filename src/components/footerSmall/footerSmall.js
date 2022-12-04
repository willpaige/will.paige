import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { GridSize } from '../../constants/grid';
import Row from '../grid/row/row';
import Col from '../grid/col/col';
import Contact from '../contact/contact';
import Katie from '../katie/katie';
import { footerRow } from '../footer/footer.module.scss';
import {
  footerSmall, katieUx, contact, noPaddingSm,
} from './footerSmall.module.scss';

function FooterSmall(props) {
  const { className } = props;
  const footerClass = classnames(className, footerRow, footerSmall);

  return (
    <Row className={footerClass} size={GridSize.EXTRA_SMALL} wrapXs>
      <Col className={noPaddingSm} size={GridSize.EXTRA_SMALL}>
        <Contact className={contact} centered />
      </Col>
      <Col className={classnames(noPaddingSm, katieUx)} size={GridSize.EXTRA_SMALL}>
        <Katie />
      </Col>
    </Row>
  );
}

FooterSmall.defaultProps = {
  className: '',
};

FooterSmall.propTypes = {
  className: PropTypes.string,
};

export default FooterSmall;
