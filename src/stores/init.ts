import {TCoil, TSupply, TTemp, TWire} from '../types/states'
import {TY_027} from '../wires/TY_027'

const initWire = TY_027[0]

export const initWireState: TWire = {
  nomDiam: initWire.nomDiam,
  maxDiam: initWire.maxDiams[1],
  weight1km: initWire.weight1km,
  resists1m: initWire.resists1m
}

export const initCoilState: TCoil = {
  isRound: true,
  innerDiam: 20,
  thickness: 16.5,
  height: 45
}

export const initSupplyState: TSupply = {
  isForce: false,
  holdVoltage: 200,
  forceVoltage: 250,
  ratioVoltageDrop: 0.9
}

export const initTempState: TTemp = {
  overheat: 80
}