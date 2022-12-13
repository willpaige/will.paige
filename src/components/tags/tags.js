import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { codeTag } from '../code/code.module.scss';
import {
  tagCode,
  tagsContainer,
} from './tags.module.scss';

function Tags(props) {
  const { className, data } = props;
  const tagsClassName = classnames(tagsContainer, className);

  return (
    <div className={tagsClassName}>
      {data.map((tag) => {
        const tagClassNames = classnames(codeTag, tagCode);
        return (
          <>
            <span className={tagClassNames} key={tag}>{tag}</span>
            {' '}
          </>
        );
      })}
    </div>
  );
}

Tags.defaultProps = {
  className: '',
};

Tags.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Tags;