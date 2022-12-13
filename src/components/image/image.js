import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  imageContainer,
  imageCaption,
  isFullWidth,
  isCentered
} from './image.module.scss';

function Image(props) {
  const { children, className, caption, fullWidth, centered } = props;
  const imageClassName = classnames(imageContainer, className, {
    [isFullWidth]: fullWidth,
    [isCentered]: centered,
  });

  return (
    <div className={imageClassName}>
      {children}
      {caption && (
        <p className={imageCaption}>
          {caption}
        </p>
      )}
    </div>
  );
}

Image.defaultProps = {
  className: '',
  caption: undefined,
  fullWidth: false,
  centered: false,
};

Image.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
  fullWidth: PropTypes.bool,
  centered: PropTypes.bool,
};

export default Image;
