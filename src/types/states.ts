export type TWire = {
  nomDiam: number,
  maxDiam: number,
  weight1km: number,
  resists1m: Array<number | null>
}

export type TCoilShape = 'round' | 'random'

export type TCoil = {
  shape: TCoilShape,
  isFrame: boolean,
  maxHeight: number,
  maxThick: number,
  innerDiam: number,
  turns: number
}

export type TSupply = {
  holdVoltage: number,
  isForce: boolean,
  forceVoltage?: number,
  voltageDev: number,
}

export type TTemp = {
  overheat: number
}

type TNumbArr = Array<number | null>

type TElectricParam = {
  currents: Array<TNumbArr>,
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

  },
  resists: TGenElectricParam<TNumbArr>,
  withHoldVoltage: TGenElectricParam<TElectricParam>,
  withForceVoltage: TGenElectricParam<TElectricParam>
}