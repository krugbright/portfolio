import React from 'react'
import "./section_title_left.css"

function SecTitleLeft({title, subTitle}) {
  return (
    <div className='section__container'>
        <div className="section__container-title"> {title} </div>
        <div className="section__container-sub">   {subTitle} </div>
    </div>
  )
}

export default SecTitleLeft