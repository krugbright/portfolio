import React from 'react'
import "./icon_card.css"

function IconCard({link,children}) {
  return (
    <div className='icon__container'>
       <a href={link} target="_blank" rel="noopener noreferrer"><i className={children}></i> </a>
    </div>
  )
}

export default IconCard