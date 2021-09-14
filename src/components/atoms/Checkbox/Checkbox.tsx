import React from 'react'
import {TCheckboxProps} from '../../../types/props'
import {getFixClass} from '../../../utils/utils'

import './Checkbox.sass'

export const Checkbox: React.FC<TCheckboxProps> = ({text, id, action, checked, handler}) => {
  const _ = getFixClass(id)
  return (
    <div className={_('checkbox')}>
      <label className={_('checkbox__label')} htmlFor={id}>{text}</label>
      <input className={_('checkbox__input')}
             type="checkbox"
             id={id}
             checked={checked}
             onChange={handler}
             data-action={action}/>
    </div>
  )
}