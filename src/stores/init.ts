import {TCoil, TSupply, TTemp, TWire} from '../types/states'
import {TY_027} from '../wires/TY_027'

const firstWire = TY_027[0]

export const initWireState: TWire = {
  nomDiam: firstWire.nomDiam,
  maxDiam: firstWire.maxDiam.type2,
  weight1km: firstWire.weight1km,
  resist1m: {
    minResist: firstWire.resist1m.minResist,
    nomResist: firstWire.resist1m.nomResist,
    maxResist: firstWire.resist1m.maxResist,
  }
}

export const initCoilState: TCoil = {
  isRound: true,
  innerDiam: 0,
  thickness: 0,
  height: 0
}

export const initSupplyState: TSupply = {
  holdVoltage: 0,
  isForcing: false,
  ratioVoltageDrop: 0.9
}

export const initTempState: TTemp = {
  overheat: 0
}