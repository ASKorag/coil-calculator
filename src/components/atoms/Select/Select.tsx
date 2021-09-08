import React from 'react'
import {TSelectProps} from 'types/props'

import {getFixClass} from 'utils/utils'

export const Select: React.FC<TSelectProps> = ({text, options, mod, name}) => {
  const _ = getFixClass(mod)
  return (
    <div className={_('select')}>
      <label className={_('select__label')}>{text}</label>
      <select className={_('select__list')} name={name}>
        {options.map(({value, text}, index) => {
          return <option className={_('select__option')} value={value} key={index}>{text ?? value}</option>
        })}
      </select>
    </div>
  )
}