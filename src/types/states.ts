export type TWire = {
  nomDiam: number,
  maxDiam: number,
  weight1km: number,
  resists1m: Array<number | null>
}

export type TCoilShape = 'round' | 'random'

export type TCoil = {
  shape: TCoilShape,
  height: number,
  thickness: number,
  innerDiam: number,
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