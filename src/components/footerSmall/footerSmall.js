import React from 'react';
import classnames from 'classnames';
import { GridSize } from '../../constants/grid';
import Row from '../grid/row/row';
import Col from '../grid/col/col';
import Contact from '../contact/contact';
import Katie from '../katie/katie';
import { footerRow } from '../footer/footer.module.scss';
import { footerSmall } from './footerSmall.module.scss';

function FooterSmall() {
  const footerClass = classnames(footerRow, footerSmall);

  return (
    <Row className={footerClass} size={GridSize.SMALL}>
      <Col size={GridSize.SMALL}>
        <Contact />
      </Col>
      <Col size={GridSize.SMALL}>
        <Katie />
      </Col>
    </Row>
  );
}

export default FooterSmall;
