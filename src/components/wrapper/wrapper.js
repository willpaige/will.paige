import React from "react"
import { wrapper } from './wrapper.module.scss';

const Wrapper = (props) => {
  const { children } = props;

  return (
    <div className={ wrapper }>
      {children}
    </div>
  )
}

export default Wrapper
