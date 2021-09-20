import {TElectricParam, TNumbArr} from '../types/states'

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
  return 100 / fillPct * turns * csa
}

export const getAVGTurnLength = (innerLength: number, thick: number, lengthType: 'diameter' | 'perimeter'): number => {
  const corrFactor = lengthType === 'diameter' ? 1 : 1 / Math.PI
  return Math.PI * (innerLength * corrFactor + thick)
}

export const getOverheatCoeff = (overheat: number): number => 1 + 4e-3 * overheat

export const getRange = (value: number, devPct: number): number[] => {
  const factors = [(1 - devPct / 100), 1, (1 + devPct / 100)]
  return factors.map(factor => factor * value)

}

export const getCurrent = (voltage: number, voltageDevPct: number, resist: TNumbArr): Array<TNumbArr> => {
  return getRange(voltage, voltageDevPct).map(volt => {
    return resist.map(res => res ? volt / res : null)
  })
}

export const getMMF = (current: Array<TNumbArr>, turns: number): Array<TNumbArr> => {
  return current.map(arr => {
    return arr.map(value => value ? value * turns : null)
  })
}

export const getCurrentDensity = (current: Array<TNumbArr>, wireCSA: number): Array<TNumbArr> => {
  return current.map(arr => {
    return arr.map(value => value ? value / wireCSA : null)
  })
}

export const getElectricParams = (voltage: number, voltageDevPct: number, turns: number, resist: TNumbArr,
                                  wireCSA: number): TElectricParam => {
  const current = getCurrent(voltage, voltageDevPct, resist)
  const mmf = getMMF(current, turns)
  const currentDensity = getCurrentDensity(current, wireCSA)
  return {current, mmf, currentDensity}
}