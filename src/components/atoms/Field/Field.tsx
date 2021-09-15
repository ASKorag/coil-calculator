import React from 'react'
import {TFieldProps} from '../../../types/props'
import {getFixClass} from '../../../utils/utils'

import './Field.sass'

export const Field: React.FC<TFieldProps> = ({text, id, step, max, action, value, handler, hidden}) => {
  const _ = getFixClass(id)
  return (
    <div className={_('field')}>
      <label className={_('field__label')} htmlFor={id} hidden={hidden}>{text}</label>
      <input className={_('field__input')}
             type="number"
             id={id}
             step={step ?? 0.1}
             max={max}
             value={value}
             onChange={handler}
             data-action={action}
             hidden={hidden}
      />
    </div>
  )
}