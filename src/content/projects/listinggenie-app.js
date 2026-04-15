import * as React from 'react';
import Image from 'next/image';
import { buildProjectsUrl } from '../../helpers/buildUrl';

export const LISTINGGENIE_APP = {
  title: 'ListingGenie',
  subtitle: 'iOS & Android Apps',
  logo: '',
  url: buildProjectsUrl('listinggenie-apps'),
  tags: ['ChatGpt', 'Ai', 'React-Native', 'NextJs', 'Redux', 'CSS', 'JavaScript', 'NodeJs', 'UX/UI',],
  blurb: 'Personal Project - React-Native iOs and Android apps for ListinGenie',
  thumbnail:
  <Image
    src="/images/projects/listinggenie/listinggenie-app-store.png"
    alt="ListingGenie - ios app"
    width={600}
    height={400}
    style={{width: '100%', height: 'auto'}}
  />,
  role: 'Designer & Developer',
  hero:
  <Image
    src="/images/projects/listinggenie/listinggenie-logo.png"
    alt="ListingGenie - iOs and Android Apps"
    width={1200}
    height={800}
    style={{width: '100%', height: 'auto'}}
  />,
  brief: {
    title: 'To create user-friendly iOs and Android apps to support the web application on listinggenie.co',
    content:
  <p>As a solo project, I developed a React Native mobile application that offers monthly and yearly subscription-based in-app purchases. The app provides users with an optimized, ad-free experience.</p>,
  },
  process:
  <>
    <p>I started by defining the app&apos;s core features, such as the ability to create and optimize product listings. I then developed the app&apos;s functionality, integrating in-app purchases through the Google Play Store and Apple App Store. The app proxies the api that&apos;s built and hosted on listinggenie.co which then makes a call to OpenAI&apos;s API for its AI-powered features, such as generating optimized product listing text.</p>
  </>,
  solution:
  <>
    <p>The app was successfully released on both the Google Play Store and Apple App Store, offering users an ad-free and optimized experience. The in-app purchases provide a subscription-based revenue model, supporting the continued development of the app and our website, listinggenie.co.</p>
  </>,
};
