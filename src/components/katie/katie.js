import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Title from '../title/title';
import { avatar, katieTitle, katieUx } from './katie.module.scss';

function Katie() {
  return (
    <div className={katieUx}>
      <Title className={katieTitle} type="h5">
        Looking for an awesome UX designer?
        <br />
        Checkout&nbsp;
        <a href="https://katie.paige.me.uk">Katie Paige</a>
      </Title>
      <a href="https://katie.paige.me.uk">
        <StaticImage className={avatar} src="../../images/katie_paige_ux_designer.png" alt="Katie Paige UX" placeholder="blurred" />
      </a>
    </div>
  );
}

export default Katie;
