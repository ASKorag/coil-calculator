import React from 'react'
import './CalcPage.sass'
import {Select} from 'components/atoms/Select/Select'
import {TCalcPageProps} from 'types/props'
import {TWireBase} from 'types/wires'
import {TWire} from 'types/states'
import {Field} from '../../components/atoms/Field/Field'
import {Group} from '../../components/molecules/Group/Group'
import {Checkbox} from '../../components/atoms/Checkbox/Checkbox'
import {TSourceDataActionTypes} from 'types/actions'

export const CalcPage: React.FC<TCalcPageProps> = ({wires, states, dispatchers}) => {
  const {sourceData, finalData} = states
  const {wire, coil, supply, temp} = sourceData
  const {setSourceData, setFinalData} = dispatchers
  const selectWire = wires.find(item => item.nomDiam === wire.nomDiam) as TWireBase
  const wiresNomDiam = wires.map(wire => ({value: wire.nomDiam}))
  const wireMaxDiams = selectWire.maxDiam.map((item, index) => ({value: item, text: `Type ${index + 1}`}))

  function handlerSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const name = event.target.name
    const index = event.target.selectedIndex

    if (name === 'diam') {
      const newSelectWire = wires[index]
      const isolSelect = document.querySelector('.select__list--isol') as HTMLSelectElement
      const isolIndex = isolSelect.selectedIndex
      const value: TWire = {
        nomDiam: newSelectWire.nomDiam,
        maxDiam: newSelectWire.maxDiam[isolIndex],
        weight1km: newSelectWire.weight1km,
        resist1m: newSelectWire.resist1m
      }
      setSourceData({type: TSourceDataActionTypes.CHANGE_WIRE, wire: value})
    }
    if (name === 'isol') {
      setSourceData({type: TSourceDataActionTypes.CHANGE_ISOLATION, value: selectWire.maxDiam[index]})
    }
    if (name === 'shape') {
      const value = event.target.value
      if (value === 'round' || value === 'random') {
        setSourceData({type: TSourceDataActionTypes.CHANGE_SHAPE, shape: value})
      }
    }
  }

  function handlerInput(event: React.ChangeEvent<HTMLInputElement>) {
    const actionType = event.target.dataset.action as TSourceDataActionTypes
    const {type, value} = event.target
    type === 'checkbox' ? setSourceData({type: actionType}) : setSourceData({type: actionType, value: +value})
  }

  return (
    <div className="calc-page page">
      <div className="calc-page__wrap wrap">
        <Group text="Wire" mod="wire">
          <Select text="Nom. diameter, mm" mod="diam" name="diam" options={wiresNomDiam} handler={handlerSelect}
                  value={wire.nomDiam}/>
          <Select text="Isolation" mod="isol" name="isol" options={wireMaxDiams}
                  handler={handlerSelect} value={wire.maxDiam}/>
        </Group>
        <Group text="Coil" mod="coil">
          <Select text="Shape of coil"
                  mod="shape"
                  name="shape"
                  options={[{value: 'round'}, {value: 'random'}]}
                  handler={handlerSelect}
                  value={coil.shape}/>
          <Checkbox text="Frame coil?"
                    id="is-frame"
                    action={TSourceDataActionTypes.TOGGLE_COIL_TYPE}
                    checked={coil.isFrame}
                    handler={handlerInput}/>
          <Field text="Max. height, mm"
                 id="max-height"
                 action={TSourceDataActionTypes.CHANGE_MAX_HEIGHT}
                 value={coil.maxHeight}
                 handler={handlerInput}
          />
          <Field text="Max. thickness, mm"
                 id="max-thick"
                 action={TSourceDataActionTypes.CHANGE_MAX_THICK}
                 value={coil.maxThick}
                 handler={handlerInput}
          />
          <Field text="Coil inner diameter, mm"
                 id="inner-diam"
                 action={TSourceDataActionTypes.CHANGE_INNER_DIAM}
                 value={coil.innerDiam}
                 handler={handlerInput}
                 hidden={coil.shape === 'random'}
          />
          <Field text="Coil inner perimeter, mm"
                 id="inner-perim"
                 action={TSourceDataActionTypes.CHANGE_INNER_PERIM}
                 value={coil.innerPerim}
                 handler={handlerInput}
                 hidden={coil.shape === 'round'}
          />
          <Field text="Turns"
                 id="turns"
                 action={TSourceDataActionTypes.CHANGE_TURNS}
                 step="1"
                 value={coil.turns}
                 handler={handlerInput}
          />
          <Field text="Fill factor, %"
                 id="fill-factor"
                 action={TSourceDataActionTypes.CHANGE_FILL_FACTOR}
                 step="1"
                 max="100"
                 value={coil.fillFactor}
                 handler={handlerInput}
          />
        </Group>
        <Group text="Supply" mod="supply">
          <Field text="Holding voltage, V"
                 id="hold-voltage"
                 action={TSourceDataActionTypes.CHANGE_HOLD_VOLTAGE}
                 value={supply.holdVoltage}
                 handler={handlerInput}/>
          <Checkbox text="Is forcing voltage?"
                    id="is-forcing"
                    action={TSourceDataActionTypes.TOGGLE_FORCING}
                    checked={supply.isForcing}
                    handler={handlerInput}/>
          <Field text="Forcing voltage, V"
                 id="force-voltage"
                 action={TSourceDataActionTypes.CHANGE_FORCE_VOLTAGE}
                 value={supply.forceVoltage}
                 handler={handlerInput}
                 hidden={!supply.isForcing}
          />
          <Field text="Voltage deviation, %"
                 id="voltage-dev"
                 action={TSourceDataActionTypes.CHANGE_VOLTAGE_DEV}
                 step="1"
                 max="100"
                 value={supply.voltageDev}
                 handler={handlerInput}/>
        </Group>
        <Group text="Temperature" mod="temp">
          <Field text="Overheat, °C"
                 id="overheat"
                 action={TSourceDataActionTypes.CHANGE_OVERHEAT}
                 value={temp.overheat}
                 handler={handlerInput}/>
        </Group>
      </div>
    </div>
  )
}