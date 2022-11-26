import React from "react"
import { connect } from "react-redux"
import { setTheme } from "../../state/ui/ui-action"

const Theme = ({ theme, dispatch, children }) => {
  dispatch(setTheme(theme));

  return (
    <>
      {children}
    </>
  )
}

export default connect()(Theme);
