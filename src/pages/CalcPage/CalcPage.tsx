import React from 'react'
import './CalcPage.sass'
import {Select} from 'components/atoms/Select/Select'
import {TCalcPageProps} from 'types/props'
import {TCoilActionTypes, TSupplyActionTypes, TTempActionTypes, TWireActionTypes} from 'types/actions'
import {TWireBase} from 'types/wires'
import {TWire} from 'types/states'
import {Field} from '../../components/atoms/Field/Field'
import {Group} from '../../components/molecules/Group/Group'
import {Checkbox} from '../../components/atoms/Checkbox/Checkbox'

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
    if (name === 'shape') {
      const value = event.target.value
      if (value === 'round' || value === 'random') {

      setCoil({type: TCoilActionTypes.CHANGE_SHAPE, value})
      }
    }
  }

  function handlerInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const id = event.target.id
    const [stateName, stateProp] = id.split('-')
    switch (stateName) {
      case 'coil':
        changeCoil(stateProp, +value)
        break
      case 'supply':
        changeSupply(stateProp, +value)
        break
      case 'temp':
        changeTemp(stateProp, +value)
        break
    }
  }

  function changeCoil(stateProp: string, value: number): void {
    if (stateProp === 'maxHeight') {
      setCoil({type: TCoilActionTypes.CHANGE_MAX_HEIGHT, value})
    }
    if (stateProp === 'maxThick') {
      setCoil({type: TCoilActionTypes.CHANGE_MAX_THICK, value})
    }
    if (stateProp === 'innerDiam') {
      setCoil({type: TCoilActionTypes.CHANGE_INNER_DIAM, value})
    }
    if (stateProp === 'turns') {
      setCoil({type: TCoilActionTypes.CHANGE_TURNS, value})
    }
  }

  function changeSupply(stateProp: string, value: number): void {
    if (stateProp === 'holdVoltage') {
      setSupply({type: TSupplyActionTypes.CHANGE_HOLD_VOLTAGE, value})
    }
    if (stateProp === 'forceVoltage') {
      setSupply({type: TSupplyActionTypes.CHANGE_FORCE_VOLTAGE, value})
    }
    if (stateProp === 'voltageDev') {
      setSupply({type: TSupplyActionTypes.CHANGE_VOLTAGE_DEV, value})
    }
  }

  function changeTemp(stateProp: string, value: number): void {
    if (stateProp === 'overheat') {
      setTemp({type: TTempActionTypes.CHANGE_OVERHEAT, value})
    }
  }

  function handlerCheck(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.target.id
    const [stateName, stateProp] = id.split('-')

    if (stateName === 'supply') {
      setSupply({type: TSupplyActionTypes.TOGGLE_FORCE})
    }
    if (stateName === 'coil') {
      setCoil({type: TCoilActionTypes.TOGGLE_TYPE})
    }
  }

  return (
    <div className="calc-page page">
      <div className="calc-page__wrap wrap">
        <Group text="Wire" mod="wire">
          <Select text="Nom. diameter" mod="diam" name="diam" options={wiresNomDiam} handler={handlerSelect}
                  value={wire.nomDiam}/>
          <Select text="Isolation " mod="isol" name="isol" options={wireMaxDiams}
                  handler={handlerSelect} value={wire.maxDiam}/>
        </Group>
        <Group text="Coil" mod="coil">
          <Select text="Shape of coil" mod="shape" name="shape" options={[{value: 'round'}, {value: 'random'}]} handler={handlerSelect}
                  value={coil.shape}/>
          <Checkbox text="Frame coil?"
                    mod="is-frame"
                    id="coil-isFrame"
                    checked={coil.isFrame}
                    handler={handlerCheck}/>
          <Field mod="max-height" text="Max. height" handler={handlerInput} id="coil-maxHeight" value={coil.maxHeight}/>
          <Field mod="max-thick" text="Max. thickness" handler={handlerInput} id="coil-maxThick" value={coil.maxThick}/>
          <Field mod="inner-diam"
                 text="Coil inner diam"
                 handler={handlerInput}
                 id="coil-innerDiam"
                 value={coil.innerDiam}/>
          <Field mod="turns"
                 text="Turns"
                 handler={handlerInput}
                 id="coil-turns"
                 value={coil.turns}/>
        </Group>
        <Group text="Supply" mod="supply">
          <Field text="Hold voltage"
                 id="supply-holdVoltage"
                 mod="hold-voltage"
                 value={supply.holdVoltage}
                 handler={handlerInput}/>
          <Checkbox text="Force voltage?"
                    mod="is-force"
                    id="supply-isForce"
                    checked={supply.isForce}
                    handler={handlerCheck}/>
          <Field text="Force voltage"
                 id="supply-forceVoltage"
                 mod="force-voltage"
                 value={supply.forceVoltage}
                 disabled={!supply.isForce}
                 handler={handlerInput}/>
          <Field text="Voltage deviation"
                 id="supply-voltageDev"
                 mod="voltage-dev"
                 value={supply.voltageDev}
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
    </div>
  )
}