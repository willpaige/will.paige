import React from 'react';
import Row from '../grid/row/row';
import Col from '../grid/col/col';
import Title from '../title/title';
import { GridSize } from '../../constants/grid';
import classNames from "classnames";
import {StaticImage} from "gatsby-plugin-image";
import { codeTag, codeBlock, codeNoMarginLeft } from '../code/code.module.scss';
import { company, jobDescription, jobStart, jobTitle, logoCol, footerRow, content, roosterLogo } from './footer.module.scss';
import Katie from "../katie/katie";

function Footer() {
  return (
    <footer className={footerRow}>
      <Row size={GridSize.SMALL}>
        <Col size={GridSize.SMALL}>
          <div className={content}>
            <Title type="h2">Languages</Title>
              <p>Some, but not all, of the languages and associated technologies that I work with:</p>

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

          </div>
        </Col>
      </Row>
      <Row className={footerRow} size={GridSize.SMALL}>
        <Col size={GridSize.SMALL}>
          <div className={content}>
            <Title type="h2">This Website</Title>
            <p>
              This website is built using the blazing fast
              <code className={codeTag}>GatsbyJs</code>
            </p>
            <p>
              <code className={classNames(codeTag, codeNoMarginLeft)}>GatsbyJs</code>
              {' '}
              is an open source framework with performance, scalability and security built in.
              You'll notice that when navigating this site, pages will load instantaneously. Just how it should be.
            </p>
            <p>
              As well as GatsbyJs this website uses
              <code className={codeTag}>React</code>
              {' '}
              for building its interface and
              <code className={codeTag}>Redux</code>
              {' '}
              for its state management.
            </p>
          </div>
        </Col>
        <Col size={GridSize.SMALL}>
          <div className={content}>
            <Title type="h2">Current Employment</Title>
            <Row size={GridSize.EXTRA_SMALL}>
              <Col className={logoCol} size={GridSize.EXTRA_SMALL}>
                <StaticImage className={roosterLogo} src="../../images/natwest_rooster_money.png" alt="NatWest Rooster Money" placeholder="blurred" />
              </Col>
              <Col size={GridSize.EXTRA_SMALL}>
                <Title className={company} type="h3">NatWest Rooster Money</Title>
                <p className={jobTitle}>Senior Software Engineer</p>
                <p className={jobStart}>November 2018 - Present</p>
              </Col>
            </Row>
            <div className={jobDescription}>
              <p>Roostermoney is a fast-paced, fast-growing <b>fintech</b> that aims to teach kids the value of money. Aimed at 4 to 14-year-olds, Roostermoney helps graduate children through all the key milestones in learning about money. From using a star in the younger years teaching reward systems to introducing a payment card when they're older to teach responsible spending.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Katie />
    </footer>
  );
}

export default Footer;
