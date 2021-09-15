import {TSourceData, TFinalData} from 'types/states'
import {TY_027} from '../wires/TY_027'

const initWire = TY_027[0]

export const initSourceData: TSourceData = {
  wire: {
    nomDiam: initWire.nomDiam,
    maxDiam: initWire.maxDiam[1],
    weight1km: initWire.weight1km,
    resist1m: initWire.resist1m
  },
  coil: {
    shape: 'round',
    isFrame: true,
    maxHeight: 45,
    maxThick: 16.5,
    innerDiam: 20,
    innerPerim: 100,
    turns: 1000,
    fillFactor: 85
  },
  supply: {
    isForcing: false,
    holdVoltage: 200,
    forceVoltage: 250,
    voltageDev: 10,
  },
  temp: {
    overheat: 80
  }
}

export const initFinalData: TFinalData = {
  coil: {
    height: 0,
    thick: 0,
    averageTurnLength: 0,
    weight: 0
  },
  resist: {
    withOverheat: [0],
    withoutOverheat: [0]
  },
  withHoldVoltage: {
    withoutOverheat: {
      current: [[0], [0], [0]],
      mmf: [[0], [0], [0]],
      currentDensity: [[0], [0], [0]],
    },
    withOverheat: {
      current: [[0], [0], [0]],
      mmf: [[0], [0], [0]],
      currentDensity: [[0], [0], [0]],
    }
  },
  withForceVoltage: {
    withoutOverheat: {
      current: [[0], [0], [0]],
      mmf: [[0], [0], [0]],
      currentDensity: [[0], [0], [0]],
    },
    withOverheat: {
      current: [[0], [0], [0]],
      mmf: [[0], [0], [0]],
      currentDensity: [[0], [0], [0]],
    },
  }
}