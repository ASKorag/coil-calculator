import React from 'react'
import {TGroupProps} from '../../../types/props'
import {getFixClass} from '../../../utils/utils'

import './Group.sass'

export const Group: React.FC<TGroupProps> = ({children, text, mod}) => {
  const _ = getFixClass(mod)
  return (
    <div className={_('group')}>
      <h3 className={_('group__title')}>{text}</h3>
      {children}
    </div>
  )
}