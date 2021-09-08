import React from 'react'
import {TButtonProps} from 'types/atoms'
import './Button.sass'

export const Button: React.FC<TButtonProps> = ({text, mod}) => {
  if (mod === 'open') {
    return (
      <label className={`btn btn--${mod}`}>{text}
        <input type="file"/>
      </label>
    )
  }
  if (mod === 'new') {
    return <a className={`btn btn--${mod}`} href="#">{text}</a>
  }
  return <button className={`btn btn--${mod}`}>{text}</button>
}