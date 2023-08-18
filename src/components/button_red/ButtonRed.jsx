import React from 'react'
import "./button_red.css"

function ButtonRed({children}) {
  return (
    <button className='btn-red'>{children}</button>
  )
}

export default ButtonRed