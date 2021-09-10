import React from 'react'
import {TSelectProps} from 'types/props'
import {getFixClass} from 'utils/utils'

import './Select.sass'

export const Select: React.FC<TSelectProps> = ({text, options, mod, name, handler, value}) => {
  const _ = getFixClass(mod)
  return (
    <div className={_('select')}>
      <label className={_('select__label')}>{text}</label>
      <select className={_('select__list')} name={name} onChange={handler} value={value}>
        {options.map(({value, text}, index) => {
          return <option className={_('select__option')} value={value} key={index}>{text ?? value}</option>
        })}
      </select>
    </div>
  )
}