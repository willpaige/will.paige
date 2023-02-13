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
          I&apos;m currently working in the exciting field of
          {' '}
          <b>fintech</b>
          {' '}
          specifically for Natwest Rooster Money, a children&apos;s pocket money management app. Which aims to empower the next generation with financial literacy and independence.
        </p>
        <p>
          I started my journey with Rooster Money back in 2018, when it was just a small startup with ten employees. Over the past four years, I've been privileged to witness Rooster grow into a much larger and more established company, now employing over 70 people as part of the NatWest group. It's been an exciting and rewarding experience to be a part of Rooster's growth and success.
        </p>
      </div>
    </>
  );
}

export default CurrentEmployment;
