import {TCoil, TIndexes, TSupply, TTemp, TWire} from '../types/states'
import {TY_027} from '../wires/TY_027'

export const initIndexesState: TIndexes = {
  wireIndex: 0,
  isolationIndex: 1
}

const initWire = TY_027[initIndexesState.wireIndex]
type isolationTypes = 'type1' | 'type2' | 'type3'
const a = `type${initIndexesState.isolationIndex}` as isolationTypes

export const initWireState: TWire = {
  nomDiam: initWire.nomDiam,
  maxDiam: initWire.maxDiam[a],
  weight1km: initWire.weight1km,
  resist1m: {
    minResist: initWire.resist1m.minResist,
    nomResist: initWire.resist1m.nomResist,
    maxResist: initWire.resist1m.maxResist,
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