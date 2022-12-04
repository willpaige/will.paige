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
          I&apos;m currently working in
          {' '}
          <b>fintech</b>
          {' '}
          for Natwest Rooster Money, a children&apos;s pocket money management app.
        </p>
        <p>
          I began work at Rooster Money in 2018; at that time, it was a small startup
          with ten employees. Over the past four years, Rooster has grown in strength
          and size, now employing over 70 people as part of the NatWest group.
        </p>
      </div>
    </>
  );
}

export default CurrentEmployment;
