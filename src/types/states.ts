export type TWire = {
  nomDiam: number,
  maxDiam: number,
  weight1km: number,
  resist1m: {
    minResist: number | null,
    nomResist: number,
    maxResist: number | null,
  },
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

export type TIndexes = {
  wireIndex: number,
  isolationIndex: number
}