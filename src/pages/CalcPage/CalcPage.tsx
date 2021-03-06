import React, {useEffect} from 'react'
import './CalcPage.sass'
import {Select} from 'components/atoms/Select/Select'
import {TCalcPageProps} from 'types/props'
import {TWireBase} from 'types/wires'
import {TWire} from 'types/states'
import {Field} from '../../components/atoms/Field/Field'
import {Group} from '../../components/molecules/Group/Group'
import {Checkbox} from '../../components/atoms/Checkbox/Checkbox'
import {TFinalDataActionTypes, TSourceDataActionTypes} from 'types/actions'
import {getAVGTurnLength, getCSA, getElectricParams, getOverheatCoeff} from '../../utils/utils'
import {ResultTable} from '../../components/sections/ResultTable/ResultTable'

export const CalcPage: React.FC<TCalcPageProps> = ({wires, states, dispatchers}) => {
  const {sourceData, finalData} = states
  const {wire, coil, supply, temp} = sourceData
  const {setSourceData, setFinalData} = dispatchers
  const selectWire = wires.find(item => item.nomDiam === wire.nomDiam) as TWireBase
  const wiresNomDiam = wires.map(wire => ({value: wire.nomDiam}))
  const wireMaxDiams = selectWire.maxDiam.map((item, index) => ({value: item, text: `Тип ${index + 1}`}))

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

  function calcFinalData() {
    //Coil
    const coilFullCSA = getCSA(wire.maxDiam, coil.turns, coil.fillPct, true)
    let newHeight, newThick
    if (coil.isFrame) {
      newHeight = coil.maxHeight
      newThick = coilFullCSA / coil.maxHeight
      setFinalData({type: TFinalDataActionTypes.CHANGE_HEIGHT, value: newHeight})
      setFinalData({type: TFinalDataActionTypes.CHANGE_THICK, value: newThick})
    } else {
      newHeight = coilFullCSA / coil.maxThick
      newThick = coil.maxThick
      setFinalData({type: TFinalDataActionTypes.CHANGE_HEIGHT, value: newHeight})
      setFinalData({type: TFinalDataActionTypes.CHANGE_THICK, value: newThick})
    }
    const avgTurnLength = getAVGTurnLength(coil.innerLength, newThick,
      coil.shape === 'round' ? 'diameter' : 'perimeter')
    setFinalData({type: TFinalDataActionTypes.CHANGE_AVG_TURN_LENGTH, value: avgTurnLength})

    const fullLength = avgTurnLength * coil.turns
    const weight = fullLength * wire.weight1km / 1e6
    setFinalData({type: TFinalDataActionTypes.CHANGE_WEIGHT, value: weight})
//Resist
    const resistWithoutOverheat = wire.resist1m.map(resist => {
      return resist ? resist * fullLength / 1e3 : null
    })
    setFinalData({type: TFinalDataActionTypes.CHANGE_RESIST_WITHOUT_OVERHEAT, resist: resistWithoutOverheat})
    const overheatCoeff = getOverheatCoeff(temp.overheat)
    const resistWithOverheat = wire.resist1m.map(resist => {
      return resist ? overheatCoeff * resist * fullLength / 1e3 : null
    })
    setFinalData({type: TFinalDataActionTypes.CHANGE_RESIST_WITH_OVERHEAT, resist: resistWithOverheat})
//Electric params
    const wireCSA = getCSA(wire.nomDiam, 1, 100, false)
    const electricParamsWithHoldVoltage = [
      getElectricParams(supply.holdVoltage, supply.voltageDevPct, coil.turns, [...resistWithoutOverheat].reverse(),
        wireCSA),
      getElectricParams(supply.holdVoltage, supply.voltageDevPct, coil.turns, [...resistWithOverheat].reverse(),
        wireCSA)
    ]
    setFinalData({
      type: TFinalDataActionTypes.CHANGE_ELECTRIC_PARAMS_WITHOUT_OVERHEAT_HOLD_VOLTAGE,
      params: electricParamsWithHoldVoltage[0]
    })
    setFinalData({
      type: TFinalDataActionTypes.CHANGE_ELECTRIC_PARAMS_WITH_OVERHEAT_HOLD_VOLTAGE,
      params: electricParamsWithHoldVoltage[1]
    })

    const electricParamsWithForceVoltage = [
      getElectricParams(supply.forceVoltage, supply.voltageDevPct, coil.turns, [...resistWithoutOverheat].reverse(),
        wireCSA),
      getElectricParams(supply.forceVoltage, supply.voltageDevPct, coil.turns, [...resistWithOverheat].reverse(),
        wireCSA)
    ]
    setFinalData({
      type: TFinalDataActionTypes.CHANGE_ELECTRIC_PARAMS_WITHOUT_OVERHEAT_FORCE_VOLTAGE,
      params: electricParamsWithForceVoltage[0]
    })
    setFinalData({
      type: TFinalDataActionTypes.CHANGE_ELECTRIC_PARAMS_WITH_OVERHEAT_FORCE_VOLTAGE,
      params: electricParamsWithForceVoltage[1]
    })
  }

  useEffect(() => {
    calcFinalData()
  }, [sourceData])

  useEffect(() => {
    // console.clear()
    console.log(JSON.stringify(finalData, undefined, 2))
  }, [finalData])

  return (
    <div className="calc-page page">
      <div className="calc-page__wrap wrap">
        <Group mod="wire">
          <Select text="Ном. диаметр, мм" mod="diam" name="diam" options={wiresNomDiam} handler={handlerSelect}
                  value={wire.nomDiam}/>
          <Select text="Изоляция" mod="isol" name="isol" options={wireMaxDiams}
                  handler={handlerSelect} value={wire.maxDiam}/>
        </Group>
        <Group mod="coil">
          <Select text="Форма"
                  mod="shape"
                  name="shape"
                  options={[{value: 'round', text: 'Круглая'}, {value: 'random', text: 'Произвольная'}]}
                  handler={handlerSelect}
                  value={coil.shape}/>
          <Checkbox text="Каркасная катушка?"
                    id="is-frame"
                    action={TSourceDataActionTypes.TOGGLE_COIL_TYPE}
                    checked={coil.isFrame}
                    handler={handlerInput}/>
          <Field text="Макс. высота, мм"
                 id="max-height"
                 action={TSourceDataActionTypes.CHANGE_MAX_HEIGHT}
                 value={coil.maxHeight}
                 handler={handlerInput}
          />
          <Field text="Макс. толщина, мм"
                 id="max-thick"
                 action={TSourceDataActionTypes.CHANGE_MAX_THICK}
                 value={coil.maxThick}
                 handler={handlerInput}
          />
          <Field text={`Внутр. ${coil.shape === 'round' ? 'диаметр' : 'периметр'}, мм`}
                 id={`inner-${coil.shape === 'round' ? 'diam' : 'perim'}`}
                 action={TSourceDataActionTypes.CHANGE_INNER_LENGTH}
                 value={coil.innerLength}
                 handler={handlerInput}
          />
          <Field text="Витки"
                 id="turns"
                 action={TSourceDataActionTypes.CHANGE_TURNS}
                 step="1"
                 value={coil.turns}
                 handler={handlerInput}
          />
          <Field text="Заполнение, %"
                 id="fill-factor"
                 action={TSourceDataActionTypes.CHANGE_FILL_PCT}
                 step="1"
                 max="100"
                 value={coil.fillPct}
                 handler={handlerInput}
          />
        </Group>
        <Group mod="supply">
          <Field text="Напр. удержания, В"
                 id="hold-voltage"
                 action={TSourceDataActionTypes.CHANGE_HOLD_VOLTAGE}
                 value={supply.holdVoltage}
                 handler={handlerInput}/>
          <Checkbox text="Есть форсировка?"
                    id="is-forcing"
                    action={TSourceDataActionTypes.TOGGLE_FORCING}
                    checked={supply.isForcing}
                    handler={handlerInput}/>
          {supply.isForcing && <Field text="Напр. форсировки, В"
                                      id="force-voltage"
                                      action={TSourceDataActionTypes.CHANGE_FORCE_VOLTAGE}
                                      value={supply.forceVoltage}
                                      handler={handlerInput}

          />}
          <Field text="Отклонение напр., %"
                 id="voltage-dev"
                 action={TSourceDataActionTypes.CHANGE_VOLTAGE_DEV}
                 step="1"
                 max="100"
                 value={supply.voltageDevPct}
                 handler={handlerInput}/>
        </Group>
        <Group mod="temp">
          <Field text="Перегрев, °C"
                 id="overheat"
                 action={TSourceDataActionTypes.CHANGE_OVERHEAT}
                 value={temp.overheat}
                 handler={handlerInput}/>
        </Group>
        <ResultTable finalData={finalData} isForcing={sourceData.supply.isForcing} />
        {/*<Group mod="result">*/}

        {/*</Group>*/}

      </div>
    </div>
  )
}