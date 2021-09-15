export const getClass = (base: string, mod: string): string =>
  `${base} ${base}--${mod}`

export const getFixClass = (mod: string) => {
  return (base: string) => `${base} ${base}--${mod}`
}

export const getCSA = (
  diam: number,
  turns = 1,
  fillPct = 100,
  bySquare = false
): number => {
  const csa = bySquare ? diam ** 2 : (Math.PI * diam ** 2) / 4
  return 1 / fillPct * turns * csa * 100
}

export const getAVGTurnLength = (innerLength: number, thick: number, lengthType: 'diameter' | 'perimeter'): number => {
  const corrFactor = lengthType === 'diameter' ? 1 : 1 / Math.PI
  return Math.PI * (innerLength * corrFactor + thick)
}

export const getOverheatCoeff = (overheat: number): number => 1 + 4e-3 * overheat