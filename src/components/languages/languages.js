import React from 'react';
import Row from '../grid/row/row';
import Col from '../grid/col/col';
import { codeBlock } from '../code/code.module.scss';
import { GridSize } from '../../constants/grid';

function Languages() {
  return (
    <Row size={GridSize.EXTRA_SMALL}>
      <Col size={GridSize.EXTRA_SMALL}>
        <div className={codeBlock}>
          javaScript = [
          <br/>&nbsp; react,
          <br/>&nbsp; redux,
          <br/>&nbsp; gatsbyJs,
          <br/>&nbsp; webpack,
          <br/>&nbsp; expressJs,
          <br/>&nbsp; nodeJs,
          <br/>&nbsp; backbone,
          <br/>
          ];
        </div>
      </Col>
      <Col size={GridSize.EXTRA_SMALL}>
        <div className={codeBlock}>
          css:
          <br/>&nbsp; sass,
          <br/>&nbsp; less,
          <br/>&nbsp; css3;
          <br/>
        </div>
      </Col>
      <Col size={GridSize.EXTRA_SMALL}>
        <div className={codeBlock}>
          html = [
          <br/>&nbsp; html5,
          <br/>&nbsp; handlebars
          <br/>&nbsp; jsx
          <br/>
          ];<br/>
        </div>
      </Col>
      <Col size={GridSize.EXTRA_SMALL}>
        <div className={codeBlock}>
          php => array(
          <br/>&nbsp; wordPress,
          <br/>&nbsp; smarty
          <br/>
          );<br/>
        </div>
      </Col>
    </Row>
  );
}

export default Languages;
