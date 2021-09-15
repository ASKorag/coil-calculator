import {TCoilShape, TWire} from './states'

export enum TSourceDataActionTypes {
  //Wire
  CHANGE_WIRE = 'CHANGE_WIRE',
  CHANGE_ISOLATION = 'CHANGE_ISOLATION',
  //Coil
  CHANGE_SHAPE = 'CHANGE_SHAPE',
  TOGGLE_COIL_TYPE = 'TOGGLE_COIL_TYPE',
  CHANGE_MAX_HEIGHT = 'CHANGE_MAX_HEIGHT',
  CHANGE_MAX_THICK = 'CHANGE_MAX_THICK',
  CHANGE_INNER_DIAM = 'CHANGE_INNER_DIAM',
  CHANGE_INNER_PERIM = 'CHANGE_INNER_PERIM',
  CHANGE_TURNS = 'CHANGE_TURNS',
  CHANGE_FILL_FACTOR = 'CHANGE_FILL_FACTOR',
  //Supply
  TOGGLE_FORCING = 'TOGGLE_FORCING',
  CHANGE_HOLD_VOLTAGE = 'CHANGE_HOLD_VOLTAGE',
  CHANGE_FORCE_VOLTAGE = 'CHANGE_FORCE_VOLTAGE',
  CHANGE_VOLTAGE_DEV = 'CHANGE_VOLTAGE_DEV',
  //Temp
  CHANGE_OVERHEAT = 'CHANGE_OVERHEAT'
}

export enum TFinalDataActionTypes {
  CALC_RESIST = 'CALC_RESIST'
}

export type TSourceDataAction = {
  type: TSourceDataActionTypes,
  wire?: TWire,
  shape?: TCoilShape,
  value?: number
}

export type TFinalDataAction = {
  type: TFinalDataActionTypes
}