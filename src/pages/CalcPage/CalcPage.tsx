import React from 'react'
import './CalcPage.sass'
import {Select} from 'components/atoms/Select/Select'
import {TCalcPageProps} from 'types/props'
import {TCoilActionTypes, TWireActionTypes} from '../../types/actions'

export const CalcPage: React.FC<TCalcPageProps> = ({wires, states, dispatchers}) => {
  const wiresNomDiam = wires.map(wire => ({value: wire.nomDiam}))
  const {wire, coil, temp, supply} = states
  const {setWire, setCoil, setSupply, setTemp} = dispatchers

  function handlerSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const name = event.target.name
    const index = event.target.selectedIndex

    if (name === 'diam') {
      const value = wires[index].nomDiam
      setWire({type: TWireActionTypes.CHANGE_WIRE, value: value})
    }

    console.log(event.target.selectedIndex)
  }

  function handlerButton(event: React.MouseEvent<HTMLButtonElement>) {
    setCoil({type: TCoilActionTypes.TOGGLE_FORM})
    console.log('eueu')
  }

  return (
    <div className="calc-page page">
      <div>
        <span>Calc Page</span>
        <br/>
        <span>{wire.nomDiam}</span>
        <br/>
        <span>{wire.maxDiam}</span>
        <Select text="Nom. diameter" mod="diam" name="diam" options={wiresNomDiam} handler={handlerSelect}/>
        <Select text="Isolation type" mod="isol" name="isol" options={[{value: 1}, {value: 2}, {value: 3}]} handler={handlerSelect}/>
        <button onClick={event => handlerButton(event)}>aeuau</button>
        <span>{String(coil.isRound)}</span>
        <br/>
        <span>{coil.thickness}</span>
      </div>
    </div>
  )
}