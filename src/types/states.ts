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
  innerDiam: number,
  innerPerim: number,
  turns: number,
  fillFactor: number,
}

export type TSupply = {
  holdVoltage: number,
  isForcing: boolean,
  forceVoltage?: number,
  voltageDev: number,
}

export type TTemp = {
  overheat: number
}

type TNumbArr = Array<number | null>

type TElectricParam = {
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
    averageTurnLength: number,
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