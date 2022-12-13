import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title/title';
import {
  timeline,
  timelineLetter,
  timelineItem,
  timelineContent,
  timelineImage,
  timelineTitle,
  timelineSubTitle,
  timelineMeta,
  timelineImageNoBackground,
  avatar
} from './timeline.module.scss';
import Avatar from "../avatar/avatar";
import Tags from "../tags/tags";
import classnames from "classnames";

const renderMeta = (meta) => {
  if (meta) {
    return (
      <>
        {meta.date && <p className={timelineMeta}>{meta.date}</p>}
        {meta.title && <p className={timelineMeta}>{meta.title}</p>}
      </>
    );
  }
};

function Timeline(props) {
  const { content } = props;

  return (
    <div className={timeline}>
      {content.map((item) => {
        const {
          title, subTitle, meta, image, key, copy, letter, tags,
        } = item;
        return (
          <div className={timelineItem} key={key}>
            <div className={classnames(timelineImage, {
              [timelineImageNoBackground]: image
            })}>
              {image ? (
                <Avatar className={avatar}>
                  {image}
                </Avatar>
              ) : <div className={timelineLetter}>{letter}</div>}
            </div>
            <div className={timelineContent}>
              <Title type="h2" className={timelineTitle}>{title}</Title>
              <Title type="h3" className={timelineSubTitle}>{subTitle}</Title>
              {renderMeta(meta)}
              {copy}
              {tags && (
                <Tags data={tags} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

Timeline.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  content: PropTypes.array,
};

export default Timeline;
