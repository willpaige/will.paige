import React from 'react';
import PropTypes from 'prop-types';
import {
  contentList, contentListItem
} from './contentList.module.scss';
import Title from '../title/title';
import {Link} from "gatsby";

function ContentList(props) {
  const { data } = props;

  return (
    <div className={contentList}>
      {Object.keys(data).map((key) => {
        const { title, blurb, thumbnail, url } = data[key];
        return (
          <div className={contentListItem}>
            <Title type={'h2'}>{title}</Title>
            {blurb}
            {thumbnail}
            <Link to={url}>View More</Link>
          </div>
        );
      })}
    </div>
  );
}

ContentList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default ContentList;
