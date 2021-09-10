import React from 'react'
import './CalcPage.sass'
import {Select} from 'components/atoms/Select/Select'
import {TCalcPageProps} from 'types/props'
import {TCoilActionTypes, TWireActionTypes} from 'types/actions'
import {TWireBase} from 'types/wires'
import {TWire} from 'types/states'
import {Field} from '../../components/atoms/Field/Field'
import {Group} from '../../components/molecules/Group/Group'

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

  function handlerInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const id = event.target.id
    const [stateName, stateProp] = id.split('-')
    if (stateName === 'coil') {
      if (stateProp === 'height') {
        setCoil({type: TCoilActionTypes.CHANGE_HEIGHT, value: +value},)
      }
      if (stateProp === 'thickness') {
        setCoil({type: TCoilActionTypes.CHANGE_THICK, value: +value})
      }
      if (stateProp === 'innerDiam') {
        setCoil({type: TCoilActionTypes.CHANGE_INNER_DIAM, value: +value})
      }
    }
  }

  return (
    <div className="calc-page page">

      <Group text="Wire" mod="wire">
        <Select text="Nom. diameter" mod="diam" name="diam" options={wiresNomDiam} handler={handlerSelect}
                value={wire.nomDiam}/>
        <Select text="Isolation " mod="isol" name="isol" options={wireMaxDiams}
                handler={handlerSelect} value={wire.maxDiam}/>
      </Group>
      <Group text="Coil" mod="coil">
        <Field mod="height" text="Coil height" handler={handlerInput} id="coil-height" value={coil.height}/>
        <Field mod="thick" text="Coil thickness" handler={handlerInput} id="coil-thickness" value={coil.thickness}/>
        <Field mod="inner-diam"
               text="Coil inner diam"
               handler={handlerInput}
               id="coil-innerDiam"
               value={coil.innerDiam}/>
      </Group>
      <Group text="Supply" mod="supply">
        <Field text="Hold voltage"
               id="supply-holdVoltage"
               mod="hold-voltage"
               value={supply.holdVoltage}
               handler={handlerInput}/>
        <Field text="Force voltage"
               id="supply-forceVoltage"
               mod="force-voltage"
               value={supply.forceVoltage}
               handler={handlerInput}/>
        <Field text="Ratio voltage drop"
               id="supply-ratioVoltageDrop"
               mod="ratio-voltage-drop"
               value={supply.ratioVoltageDrop}
               handler={handlerInput}/>
      </Group>
      <Group text="Temperature" mod="temp">
        <Field text="Overheat"
               id="temp-overheat"
               mod="overheat"
               value={temp.overheat}
               handler={handlerInput}/>
      </Group>
    </div>
  )
}