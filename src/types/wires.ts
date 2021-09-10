export type TWireBase = {
  nomDiam: number,
  maxDiams: number[],
  weight1km: number,
  resists1m: Array<number | null>
}

export type TWiresBase = TWireBase[]