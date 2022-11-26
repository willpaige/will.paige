import * as React from 'react';
import App from '../components/app/app';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import HeroIndex from '../components/hero/heroIndex/heroIndex';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';

function IndexPage() {
  return (
    <App theme={themeMap.TEA_GREEN} activePage={PAGES.HOME}>
      <HeroIndex />
      <Content>
        <p className="lead">My name is <b>Will Paige</b> and I am a <b>Senior Software Engineer</b> with over <b>ten years experience</b> in both startup and corporate organisations, in-house and remotely. I am a highly skilled and experienced developer with a specialist interest in frontend technologies, mobile-first design, architecture, web performance, usability and functionality.</p>
        <p>A couple of personal things about me:</p>
        <ul>
          <li>
            I&apos;m
            <b> UK based </b>
            and lucky enough to live and work from the picturesque
            {' '}
            <b>South Devon</b>
          </li>
          <li>
            I live with my wife
            {' '}
            <a href="https://katie.paige.me.uk/">Katie</a>
            {' '}
            👑, Son Seb 👦, Dog Woody 🐕 and Cat Mia 🐈
          </li>
          <li>I&apos;m an avid downhill mountain biker</li>
          <li>I&apos;m a surfer, and I love the sea</li>
          <li>I&apos;m a snowboarder</li>
        </ul>
        <Footer />
      </Content>
    </App>
  );
}

export default IndexPage;

export function Head() {
  return <title>Will Paige | Software Engineer</title>;
}
