import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { contactLinks } from '../../content/contact';
import {
  contact, contactItem, contactIcon, contactLink, contactSmall, iconCentered,
} from './contact.module.scss';

function Contact(props) {
  const { small, className, centered } = props;
  const contactSmallClasss = classnames(contact, className);

  return (
    <div className={contactSmallClasss}>
      {contactLinks.map((item) => {
        const { icon, url, title } = item;
        const contactClass = classnames(contactItem, {
          [contactSmall]: small,
          [iconCentered]: centered,
        });

        return (
          <div className={contactClass}>
            <a className={contactLink} href={url} target="_blank" rel="noreferrer">
              <span className={contactIcon}>{icon()}</span>
              {!small && (
                <span className="contact-text">
                  {' '}
                  {title}
                </span>
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
}

Contact.defaultProps = {
  centered: false,
  small: false,
  className: '',
};

Contact.propTypes = {
  centered: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
};

export default Contact;
