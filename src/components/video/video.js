import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { video, videoContainer, hasVerticalMargin, isHalfWidth } from './video.module.scss';

function Video(props) {
  const { src, className, placeholder, verticalMargin, halfWidth} = props;
  const videoClassName = classnames(className, videoContainer, {
    [hasVerticalMargin]: verticalMargin,
    [isHalfWidth]: halfWidth
  });

  return (
    <div className={videoClassName}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video className={video} preload="auto" poster={placeholder} playsInline autoPlay muted loop >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

Video.defaultProps = {
  className: '',
  placeholder: '',
  verticalMargin: false,
  halfWidth: false,
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  verticalMargin: PropTypes.bool,
  halfWidth: PropTypes.bool,
};

export default Video;
