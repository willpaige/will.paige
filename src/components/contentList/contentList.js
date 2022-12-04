import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
  isHeroItem,
  contentListContent,
  contentListImage,
  contentListItem,
  contentListTitle,
  contentListSubTitle,
  contentListImageRight,
} from './contentList.module.scss';
import Title from '../title/title';
import { getActiveTheme } from '../../state/ui/ui-selectors';
import { themeBackgroundStyles } from '../../constants/theme';
import Video from '../video/video';

const imageIsRight = (key) => {
  const isRight = [1, 3, 5];
  return isRight.includes(key);
};

const isHero = (key) => key === 0;

function ContentList(props) {
  const { data, activeTheme } = props;

  return (
    <div>
      {Object.keys(data).map((key, index) => {
        const positionRight = imageIsRight(index);
        const {
          title, blurb, thumbnail, url, subtitle, video,
        } = data[key];
        const imageClass = classnames(contentListImage, {
          [contentListImageRight]: positionRight,
          [isHeroItem]: isHero(index),
        });
        const themeClass = themeBackgroundStyles[activeTheme];
        const contentClass = classnames(themeClass, contentListContent);
        const contentListItemClass = classnames(contentListItem, {
          [isHeroItem]: isHero(index),
        });

        return (
          <div className={contentListItemClass} key={title}>
            <div className={imageClass}>
              <Link to={url}>
                {video ? (
                  <Video src={video.src} placeholder={video.placeholder} />
                ) : thumbnail}
              </Link>
            </div>
            <div className={contentClass}>
              <Title className={contentListTitle} type="h2">{title}</Title>
              <Title className={contentListSubTitle} type="h5">{subtitle}</Title>
              {blurb}
              <Link to={url}>View More</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ContentList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  activeTheme: PropTypes.string.isRequired,
};

export default connect(state => ({
  activeTheme: getActiveTheme(state),
}), null)(ContentList);
