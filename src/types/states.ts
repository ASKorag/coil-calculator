export type TWire = {
  nomDiam: number,
  maxDiam: number,
  weight1km: number,
  resists1m: Array<number | null>
}

export type TCoil = {
  isRound: boolean,
  height: number,
  thickness: number,
  innerDiam: number,
}

export type TSupply = {
  holdVoltage: number,
  isForcing: boolean,
  forceVoltage?: number,
  ratioVoltageDrop: number,
}

export type TTemp = {
  overheat: number
}