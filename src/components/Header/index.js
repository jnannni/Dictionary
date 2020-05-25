import React from 'react'
import Choice from '../LangChoice'

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <div className="target--choice">
        <Choice name="target" />
      </div>
    </div>
  )
}

export default Header
