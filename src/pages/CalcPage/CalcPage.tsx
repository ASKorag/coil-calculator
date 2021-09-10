import React from 'react'
import './CalcPage.sass'
import {Select} from 'components/atoms/Select/Select'
import {TCalcPageProps} from 'types/props'
import {TWireActionTypes} from 'types/actions'
import {TWireBase} from 'types/wires'
import {TWire} from 'types/states'

export const CalcPage: React.FC<TCalcPageProps> = ({wires, states, dispatchers}) => {
  const {wire, coil, temp, supply,} = states
  const {setWire, setCoil, setSupply, setTemp,} = dispatchers
  const selectWire = wires.find(item => item.nomDiam === wire.nomDiam) as TWireBase
  const wiresNomDiam = wires.map(wire => ({value: wire.nomDiam}))
  const wireMaxDiams = selectWire.maxDiams.map((item, index) => ({value: item, text: `Type ${index + 1}`}))

  function handlerSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const name = event.target.name
    const index = event.target.selectedIndex

    if (name === 'diam') {
      const newSelectWire = wires[index]
      const isolSelect = document.querySelector('.select__list--isol') as HTMLSelectElement
      const isolIndex = isolSelect.selectedIndex
      const value: TWire = {
        nomDiam: newSelectWire.nomDiam,
        maxDiam: newSelectWire.maxDiams[isolIndex],
        weight1km: newSelectWire.weight1km,
        resists1m: newSelectWire.resists1m
      }
      setWire({type: TWireActionTypes.CHANGE_WIRE, value})
    }
    if (name === 'isol') {
      setWire({type: TWireActionTypes.CHANGE_ISOLATION, value: selectWire.maxDiams[index]})
    }
  }
  return (
    <div className="calc-page page">
      <div>
        <span>{`Nom. diam => ${wire.nomDiam}`}</span><br/>
        <span>{`Max. diam => ${wire.maxDiam}`}</span><br/>
        <span>{`Weight 1km => ${wire.weight1km}`}</span><br/>
        <span>{`Min. resist 1m => ${wire.resists1m[0]}`}</span><br/>
        <span>{`Nom. resist 1m => ${wire.resists1m[1]}`}</span><br/>
        <span>{`Max. resist 1m => ${wire.resists1m[2]}`}</span><br/>
        <hr/>

        <Select text="Nom. diameter" mod="diam" name="diam" options={wiresNomDiam} handler={handlerSelect}
                value={wire.nomDiam}/>
        <Select text="Isolation " mod="isol" name="isol" options={wireMaxDiams}
                handler={handlerSelect} value={wire.maxDiam}/>
      </div>
    </div>
  )
}