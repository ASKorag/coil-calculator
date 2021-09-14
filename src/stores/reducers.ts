import {TCoil, TFinalData, TSupply, TTemp, TWire,} from 'types/states'
import {
  TCoilAction,
  TCoilActionTypes,
  TSupplyAction,
  TSupplyActionTypes,
  TTempAction,
  TTempActionTypes,
  TWireAction,
  TWireActionTypes
} from '../types/actions'

export function wireReducer(state: TWire, {type, value}: TWireAction) {
  switch (type) {
    case TWireActionTypes.CHANGE_WIRE:
      return typeof value !== 'number' ? value : state
    case TWireActionTypes.CHANGE_ISOLATION:
      return typeof value === 'number' ? {...state, maxDiam: value} : state
    default:
      return state
  }
}

export function coilReducer(state: TCoil, {type, value}: TCoilAction) {
  switch (type) {
    case TCoilActionTypes.CHANGE_SHAPE:
      return value === 'round' || value === 'random' ? {...state, shape: value} : state
    case TCoilActionTypes.TOGGLE_TYPE:
      return {...state, isFrame: !state.isFrame}
    case TCoilActionTypes.CHANGE_MAX_HEIGHT:
      return typeof value === 'number' ? {...state, maxHeight: value} : state
    case TCoilActionTypes.CHANGE_INNER_DIAM:
      return typeof value === 'number' ? {...state, innerDiam: value} : state
    case TCoilActionTypes.CHANGE_MAX_THICK:
      return typeof value === 'number' ? {...state, maxThick: value} : state
    case TCoilActionTypes.CHANGE_TURNS:
      return typeof  value === 'number' ? {...state, turns: value} : state
    default:
      return state
  }
}

export function supplyReducer(state: TSupply, {type, value}: TSupplyAction) {
  switch (type) {
    case TSupplyActionTypes.TOGGLE_FORCE:
      return {...state, isForce: !state.isForce}
    case TSupplyActionTypes.CHANGE_FORCE_VOLTAGE:
      return value ? {...state, forceVoltage: value} : state
    case TSupplyActionTypes.CHANGE_HOLD_VOLTAGE:
      return value ? {...state, holdVoltage: value} : state
    case TSupplyActionTypes.CHANGE_VOLTAGE_DEV:
      return value ? {...state, voltageDev: value} : state
    default:
      return state
  }
}

export function tempReducer(state: TTemp, {type, value}: TTempAction) {
  switch (type) {
    case TTempActionTypes.CHANGE_OVERHEAT:
      return {...state, overheat: value}
    default:
      return state
  }
}

export const finalDataReducer = (state: TFinalData, action: {type: string}): TFinalData => {
  return state
}