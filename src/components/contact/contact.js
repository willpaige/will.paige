import React from 'react';
import {
  contact, contactItem, contactIcon, contactLink, contactSmall
} from './contact.module.scss';
import { contactLinks } from '../../constants/contact';
import classnames from "classnames";

function Contact(props) {
  const { small, className } = props;
  const contactSmallClasss = classnames(contact, className);

  return (
    <div className={contactSmallClasss}>
      {contactLinks.map((item) => {
        const { icon, url, title } = item;
        const contactClass = classnames(contactItem, small ? contactSmall : '');

        return (
          <div className={contactClass}>
            <a className={contactLink} href={url} target={'_blank'}>
              <span className={contactIcon}>{icon()}</span>
              {!small && (
                <span className={'contact-text'}>
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

export default Contact;
