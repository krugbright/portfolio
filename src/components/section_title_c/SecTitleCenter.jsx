import React from 'react'
import "./sec_title_center.css"

function SecTitleCenter({title, subTitle}) {
  return (
    <div className='section__container__center'>
        <div className="section__container__center-title"> {title} </div>
        <div className="section__container__center-sub">   {subTitle} </div>
    </div>
  )
}

export default SecTitleCenter