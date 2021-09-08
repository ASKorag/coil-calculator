import React from 'react'
import './CalcPage.sass'
import {Select} from '../../components/atoms/Select/Select'

export const CalcPage: React.FC<HTMLElement> = () => {
  return (
    <>
      <div>
        <span>Calc Page</span>
        <br/>
        <Select text="Nominal diameter" mod="diam" name="diam" options={[{value: 'option_1'}, {value: 'option_2'}]}/>
        <Select text="Isolation type" mod="isol" options={[{value: 1}, {value: 2}, {value: 3}]} />
      </div>
    </>
  )
}