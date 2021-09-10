import {TWire} from './states'

export enum TCoilActionTypes {
  TOGGLE_FORM = 'TOGGLE_FORM',
  CHANGE_HEIGHT = 'CHANGE_HEIGHT',
  CHANGE_THICK = 'CHANGE_THICK',
  CHANGE_INNER_DIAM = 'CHANGE_INNER_DIAM'
}

export enum TWireActionTypes {
  CHANGE_WIRE = 'CHANGE_WIRE',
  CHANGE_ISOLATION = 'CHANGE_ISOLATION'
}

export enum TSupplyActionTypes {
  TOGGLE_FORCE = 'TOGGLE_FORCE',
  CHANGE_HOLD_VOLTAGE = 'CHANGE_HOLD_VOLTAGE',
  CHANGE_FORCE_VOLTAGE = 'CHANGE_FORCE_VOLTAGE',
  CHANGE_RATIO_VOLTAGE_DROP = 'CHANGE_RATIO_VOLTAGE_DROP',
}

export enum TTempActionTypes {
  CHANGE_OVERHEAT = 'CHANGE_OVERHEAT'
}

export type TCoilAction = {
  type: TCoilActionTypes,
  value?: number
}

export type TWireAction = {
  type: TWireActionTypes,
  value: number | TWire
}

export type TSupplyAction = {
  type: TSupplyActionTypes,
  value?: number
}

export type TTempAction = {
  type: TTempActionTypes,
  value: number
}