import React from "react"
import { connect } from "react-redux"
import { themeMap } from '../../constants/theme'
import { setTheme } from "../../state/ui/ui-action"

const Theme = ({ theme, dispatch, children }) => {
  dispatch(setTheme(theme ? theme : themeMap.DEFAULT));

  return (
    <>
      {children}
    </>
  )
}

export default connect()(Theme);
