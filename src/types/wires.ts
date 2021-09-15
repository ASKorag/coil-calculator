export type TWireBase = {
  nomDiam: number,
  maxDiam: number[],
  weight1km: number,
  resist1m: Array<number | null>
}

export type TWiresBase = TWireBase[]