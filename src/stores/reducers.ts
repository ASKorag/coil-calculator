import {TCoil, TIndexes, TSupply, TTemp, TWire} from '../types/states'
import {
  TCoilAction,
  TCoilActionTypes,
  TIndexesAction,
  TIndexesActionTypes,
  TSupplyAction,
  TSupplyActionTypes,
  TTempAction,
  TTempActionTypes,
  TWireAction,
  TWireActionTypes
} from '../types/actions'

export function wireReducer(state: TWire, {type, value}: TWireAction) {
  switch (type) {
    case TWireActionTypes.CHANGE_ISOLATION:
      return typeof value === 'number' ? {...state, maxDiam: value} : state
    case TWireActionTypes.CHANGE_WIRE:
      return typeof value !== 'number' ? value : state
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
      return value ? {...state, thickness:value} : state
    default:
      return state
  }
}

export function supplyReducer(state: TSupply, {type, value}: TSupplyAction) {
  switch (type) {
    case TSupplyActionTypes.TOGGLE_FORCE:
      return {...state, isForcing: !state.isForcing}
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

export function indexesReducer(state: TIndexes, {type, value}: TIndexesAction) {
  switch (type) {
    case TIndexesActionTypes.CHANGE_WIRE_INDEX:
      return {...state, wireIndex: value}
    case TIndexesActionTypes.CHANGE_ISOLATION_INDEX:
      return {...state, isolationIndex: value}
    default:
      return state

  }
}