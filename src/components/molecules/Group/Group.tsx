import React from 'react'
import {TGroupProps} from '../../../types/props'
import {getFixClass} from '../../../utils/utils'

import './Group.sass'

export const Group: React.FC<TGroupProps> = ({children, mod}) => {
  const _ = getFixClass(mod)
  return (
    <div className={_('group')}>
      <div className={_('group__wrap')}>
        {children}
      </div>
    </div>
  )
}