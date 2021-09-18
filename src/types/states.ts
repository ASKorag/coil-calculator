export type TWire = {
  nomDiam: number,
  maxDiam: number,
  weight1km: number,
  resist1m: Array<number | null>
}

export type TCoilShape = 'round' | 'random'

export type TCoil = {
  shape: TCoilShape,
  isFrame: boolean,
  maxHeight: number,
  maxThick: number,
  innerLength: number,
  turns: number,
  fillFactor: number,
}

export type TSupply = {
  holdVoltage: number,
  isForcing: boolean,
  forceVoltage: number,
  voltageDevFactor: number,
}

export type TTemp = {
  overheat: number
}

export type TNumbArr = Array<number | null>

export type TElectricParam = {
  current: Array<TNumbArr>,
  mmf: Array<TNumbArr>,
  currentDensity: Array<TNumbArr>
}

type TGenElectricParam<T> = {
  withoutOverheat: T,
  withOverheat: T
}

export type TFinalData = {
  coil: {
    height: number,
    thick: number,
    avgTurnLength: number,
    weight: number,
  },
  resist: TGenElectricParam<TNumbArr>,
  withHoldVoltage: TGenElectricParam<TElectricParam>,
  withForceVoltage: TGenElectricParam<TElectricParam>
}

export type TSourceData = {
  wire: TWire,
  coil: TCoil,
  supply: TSupply,
  temp: TTemp
}