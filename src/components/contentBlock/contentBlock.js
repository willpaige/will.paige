import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  contentBlock,
  titleClass
} from './contentBlock.module.scss';
import Title from '../title/title';

function ContentBlock(props) {
  const { children, className, title, subtitle } = props;
  const contentBlockClassName = classnames(contentBlock, className);

  return (
    <div className={contentBlockClassName}>
      <Title className={titleClass} type="h3">
        {title && title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </Title>
      {children}
    </div>
  );
}

ContentBlock.defaultProps = {
  title: '',
  className: '',
  subtitle: '',
  children: undefined,
};

ContentBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ContentBlock;
