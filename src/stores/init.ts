import {TCoil, TFinalData, TSupply, TTemp, TWire} from '../types/states'
import {TY_027} from '../wires/TY_027'

const initWire = TY_027[0]

export const initWireState: TWire = {
  nomDiam: initWire.nomDiam,
  maxDiam: initWire.maxDiams[1],
  weight1km: initWire.weight1km,
  resists1m: initWire.resists1m
}

export const initCoilState: TCoil = {
  shape: 'round',
  innerDiam: 20,
  thickness: 16.5,
  height: 45
}

export const initSupplyState: TSupply = {
  isForce: false,
  holdVoltage: 200,
  forceVoltage: 250,
  voltageDev: 10,
}

export const initTempState: TTemp = {
  overheat: 80
}

export const initFinalData: TFinalData = {
  coil: {
    height: 0,
    thick: 0
  },
  resists: {
    withOverheat: [0],
    withoutOverheat: [0]
  },
  withHoldVoltage: {
    withoutOverheat: {
      currents: [[0], [0], [0]],
      mmf: [[0], [0], [0]],
      currentDensity: [[0], [0], [0]],
    },
    withOverheat: {
      currents: [[0], [0], [0]],
      mmf: [[0], [0], [0]],
      currentDensity: [[0], [0], [0]],
    }
  },
  withForceVoltage: {
    withoutOverheat: {
      currents: [[0], [0], [0]],
      mmf: [[0], [0], [0]],
      currentDensity: [[0], [0], [0]],
    },
    withOverheat: {
      currents: [[0], [0], [0]],
      mmf: [[0], [0], [0]],
      currentDensity: [[0], [0], [0]],
    },
  }
}