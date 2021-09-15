import {TFinalData, TSourceData} from 'types/states'

import {TFinalDataAction, TFinalDataActionTypes, TSourceDataAction, TSourceDataActionTypes,} from '../types/actions'

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
    case TSourceDataActionTypes.CHANGE_INNER_LENGTH:
      return value ? {...state, coil: {...state.coil, innerLength: value}} : state
    case TSourceDataActionTypes.CHANGE_TURNS:
      return value ? {...state, coil: {...state.coil, turns: value}} : state
    case TSourceDataActionTypes.CHANGE_FILL_PCT:
      return value ? {...state, coil: {...state.coil, fillPct: value}} : state
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

export const finalDataReducer = (state: TFinalData, {type, value, resist}: TFinalDataAction): TFinalData => {
  switch (type) {
    //Coil
    case TFinalDataActionTypes.CHANGE_HEIGHT:
      return value ? {...state, coil: {...state.coil, height: value}} : state
    case TFinalDataActionTypes.CHANGE_THICK:
      return value ? {...state, coil: {...state.coil, thick: value}} : state
    case TFinalDataActionTypes.CHANGE_AVG_TURN_LENGTH:
      return value ? {...state, coil: {...state.coil, avgTurnLength: value}} : state
    case TFinalDataActionTypes.CHANGE_WEIGHT:
      return value ? {...state, coil: {...state.coil, weight: value}} : state
    //Resist
    case TFinalDataActionTypes.CHANGE_RESIST_WITHOUT_OVERHEAT:
      return resist ? {...state, resist: {...state.resist, withoutOverheat: resist}} : state
    case TFinalDataActionTypes.CHANGE_RESIST_WITH_OVERHEAT:
      return resist ? {...state, resist: {...state.resist, withOverheat: resist}} : state
    //Def
    default:
      return state
  }
}