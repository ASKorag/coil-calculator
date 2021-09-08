import React from 'react'
import './CalcPage.sass'
import {Select} from '../../components/atoms/Select/Select'
import {TCalcPageProps} from '../../types/props'

export const CalcPage: React.FC<TCalcPageProps> = ({wires}) => {
  const wiresNomDiam = wires.map(wire => ({value: wire.nomDiam}))
  return (
    <div className="calc-page page">
      <div>
        <span>Calc Page</span>
        <br/>
        <Select text="Nominal diameter" mod="diam" name="diam" options={wiresNomDiam}/>
        <Select text="Isolation type" mod="isol" options={[{value: 1}, {value: 2}, {value: 3}]} />
      </div>
    </div>
  )
}