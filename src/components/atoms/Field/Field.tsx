import React from 'react'
import {TFieldProps} from '../../../types/props'
import {getFixClass} from '../../../utils/utils'

import './Field.sass'

export const Field: React.FC<TFieldProps> = ({text, id, mod, value, handler}) => {
  const _ = getFixClass(mod)
  return (
    <div className={_('field')}>
      <label className={_('field__label')} htmlFor={id}>{text}</label>
      <input className={_('field__input')}
             type="number"
             step="0.1"
             id={id}
             value={value}
             onChange={handler}
             onBlur={() => console.log('Boom')}
             />
    </div>
  )
}