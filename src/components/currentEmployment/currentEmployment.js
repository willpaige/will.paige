import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Row from '../grid/row/row';
import Col from '../grid/col/col';
import Title from '../title/title';
import Avatar from '../avatar/avatar';
import {
  company, description, logoCol, start, title,
} from './currentEmployment.module.scss';
import { GridSize } from '../../constants/grid';

function CurrentEmployment() {
  return (
    <>
      <Row size={GridSize.EXTRA_SMALL}>
        <Col className={logoCol} size={GridSize.EXTRA_SMALL}>
          <Avatar>
            <StaticImage
              src="../../images/work/natwest_rooster_money.png"
              alt="NatWest Rooster Money"
              placeholder="blurred"
            />
          </Avatar>
        </Col>
        <Col size={GridSize.EXTRA_SMALL}>
          <Title className={company} type="h3">NatWest Rooster Money</Title>
          <p className={title}>Senior Software Engineer</p>
          <p className={start}>November 2018 - Present</p>
        </Col>
      </Row>
      <div className={description}>
        <p>
          Roostermoney is a fast-paced, fast-growing
          {' '}
          <b>fintech</b>
          {' '}
          that aims to teach kids the value of money.
          Aimed at 4 to 14-year-olds, Roostermoney helps graduate children through all the key milestones in
          learning about money. From using a star in the younger years teaching reward systems to introducing a
          payment card when they're older to teach responsible spending.
        </p>
      </div>
    </>
  );
}

export default CurrentEmployment;
