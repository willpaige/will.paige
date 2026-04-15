import React from 'react';
import Image from 'next/image';
import Title from '../title/title';
import { avatar, katieTitle, katieUx } from './katie.module.scss';
import Avatar from '../avatar/avatar';

function Katie() {
  return (
    <div className={katieUx}>
      <Title className={katieTitle} type="h5">
        Looking for an awesome UX designer?
        <br />
        Checkout&nbsp;
        <a href="https://katie.paige.me.uk">Katie Paige</a>
      </Title>
      <Avatar small className={avatar} url="https://katie.paige.me.uk">
        <Image src="/images/katie_paige_ux_designer.png" alt="Katie Paige UX" width={50} height={50} />
      </Avatar>
    </div>
  );
}

export default Katie;
