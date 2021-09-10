import {TCoil, TSupply, TTemp, TWire,} from 'types/states'
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
    case TCoilActionTypes.TOGGLE_FORM:
      return {...state, isRound: !state.isRound}
    case TCoilActionTypes.CHANGE_HEIGHT:
      return value ? {...state, height: value} : state
    case TCoilActionTypes.CHANGE_INNER_DIAM:
      return value ? {...state, innerDiam: value} : state
    case TCoilActionTypes.CHANGE_THICK:
      return value ? {...state, thickness: value} : state
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
    case TSupplyActionTypes.CHANGE_RATIO_VOLTAGE_DROP:
      return value ? {...state, ratioVoltageDrop: value} : state
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