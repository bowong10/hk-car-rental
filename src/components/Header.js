import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Header = ({title}) => {
  return (
    <div>{title} <FaTimes style={{color:'green', cursor:'pointer'}}/></div>
  )
}

Header.defaultProps = {
    title: 'defaul header value'
}

export default Header