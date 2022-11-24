import React from "react"
import { Link } from "gatsby"
import { navigation, link } from './navigation.module.scss';

const links = [
  {
   title: 'About',
   url: '/about/',
  }, {
   title: 'Work',
   url: '/work/',
  }, {
   title: 'Education',
   url: '/education/',
  }, {
   title: 'Services',
   url: '/services/',
  }, {
   title: 'Contact',
   url: '/contact/',
  }
];

const Navigation = () => {
  // const { children } = props;

  return (
    <div className={ navigation }>
      ---- Add Colour blocks to change the website theme

      {links.map((item, key) => (
        <Link className={link} title={item.title} to={`/about/`} key={key}>{item.title}</Link>
        ))}
    </div>
  )
}

export default Navigation
