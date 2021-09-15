import {TFinalData, TSourceData} from 'types/states'

import {
  TSourceDataAction,
  TSourceDataActionTypes,
} from '../types/actions'

export const sourceDataReducer = (state: TSourceData, {type, wire, shape, value}: TSourceDataAction): TSourceData => {
  switch (type) {
    //Wire
    case TSourceDataActionTypes.CHANGE_WIRE:
      return wire ? {...state, wire} : state
    case TSourceDataActionTypes.CHANGE_ISOLATION:
      return value ? {...state, wire: {...state.wire, maxDiam: value}} : state
    //Coil
    case TSourceDataActionTypes.CHANGE_SHAPE:
      return shape ? {...state, coil: {...state.coil, shape}} : state
    case TSourceDataActionTypes.TOGGLE_COIL_TYPE:
      return {...state, coil: {...state.coil, isFrame: !state.coil.isFrame}}
    case TSourceDataActionTypes.CHANGE_MAX_HEIGHT:
      return value ? {...state, coil: {...state.coil, maxHeight: value}} : state
    case TSourceDataActionTypes.CHANGE_MAX_THICK:
      return value ? {...state, coil: {...state.coil, maxThick: value}} : state
    case TSourceDataActionTypes.CHANGE_INNER_DIAM:
      return value ? {...state, coil: {...state.coil, innerDiam: value}} : state
    case TSourceDataActionTypes.CHANGE_INNER_PERIM:
      return value ? {...state, coil: {...state.coil, innerPerim: value}} : state
    case TSourceDataActionTypes.CHANGE_TURNS:
      return value ? {...state, coil: {...state.coil, turns: value}} : state
    case TSourceDataActionTypes.CHANGE_FILL_FACTOR:
      return value ? {...state, coil: {...state.coil, fillFactor: value}} : state
    //Supply
    case TSourceDataActionTypes.TOGGLE_FORCING:
      return {...state, supply: {...state.supply, isForcing: !state.supply.isForcing}}
    case TSourceDataActionTypes.CHANGE_FORCE_VOLTAGE:
      return value ? {...state, supply: {...state.supply, forceVoltage: value}} : state
    case TSourceDataActionTypes.CHANGE_HOLD_VOLTAGE:
      return value ? {...state, supply: {...state.supply, holdVoltage: value}} : state
    case TSourceDataActionTypes.CHANGE_VOLTAGE_DEV:
      return value ? {...state, supply: {...state.supply, voltageDev: value}} : state
    //Temp
    case TSourceDataActionTypes.CHANGE_OVERHEAT:
      return value ? {...state, temp: {...state.temp, overheat: value}} : state
    //Def
    default:
      return state
  }
}

export const finalDataReducer = (state: TFinalData, action: { type: string }): TFinalData => {
  return state
}