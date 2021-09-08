export type TWireBase = {
  nomDiam: number,
  maxDiam: {
    type1: number
    type2: number,
    type3: number,
  },
  weight1km: number,
  resist1m: {
    minResist: number | null,
    nomResist: number,
    maxResist: number | null,
  },
}

export type TWiresBase = TWireBase[]