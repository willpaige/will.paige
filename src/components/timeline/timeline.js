import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { codeTag } from '../code/code.module.scss';
import Title from '../title/title';
import {
  tagCode,
  tagsContainer,
  timeline,
  timelineLetter,
  timelineItem,
  timelineContent,
  timelineImage,
  timelineTitle,
  timelineSubTitle,
  timelineMeta,
} from './timeline.module.scss';
import Avatar from "../avatar/avatar";

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
            <div className={timelineImage}>
              {image ? (
                <Avatar>
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
                <div className={tagsContainer}>
                  {tags.map((tag) => {
                    const tagClassNames = classNames(codeTag, tagCode);
                    return (
                      <>
                        <span className={tagClassNames} key={tag}>{tag}</span>
                        {' '}
                      </>
                    );
                  })}
                </div>
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
