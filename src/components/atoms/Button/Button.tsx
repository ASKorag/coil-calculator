import React from 'react'
import {Link} from 'react-router-dom'
import {TButtonProps} from 'types/atoms'
import './Button.sass'

export const Button: React.FC<TButtonProps> = ({text, mod, href}) => {
  if (mod === 'open') {
    return (
      <label className={`btn btn--${mod}`}>{text}
        <input type="file"/>
      </label>
    )
  }
  if (mod === 'new') {
    return <Link to={href ?? ''} className={`btn btn--${mod}`}>{text}</Link>
  }
  return <button className={`btn btn--${mod}`}>{text}</button>
}