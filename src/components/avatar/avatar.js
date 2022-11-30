import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { avatar, avatarSmall } from './avatar.module.scss';

function Avatar(props) {
  const {
    url, children, className, small,
  } = props;
  const avatarClass = classnames(avatar, className, {
    [avatarSmall]: small,
  });

  const renderAvatar = () => {
    if (url) {
      return <a className={avatarClass} href={url}>{children}</a>;
    }

    return <div className={avatarClass}>{children}</div>;
  };

  return renderAvatar();
}

Avatar.defaultProps = {
  className: '',
  small: false,
};

Avatar.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  small: PropTypes.bool,
};

export default Avatar;
