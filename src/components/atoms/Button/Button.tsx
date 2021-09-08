import React from 'react'
import {Link} from 'react-router-dom'
import {TButtonProps} from 'types/props'
import './Button.sass'

import {getFixClass} from 'utils/utils'

export const Button: React.FC<TButtonProps> = ({text, mod, href}) => {
  const _ = getFixClass(mod)
  if (mod === 'open') {
    return (
      <label className={_('btn')}>{text}
        <input type="file"/>
      </label>
    )
  }
  if (mod === 'new') {
    return <Link to={href ?? ''} className={_('btn')}>{text}</Link>
  }
  return <button className={_('btn')}>{text}</button>
}