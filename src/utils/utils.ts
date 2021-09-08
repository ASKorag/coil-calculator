export const getClass = (base: string, mod: string): string => `${base} ${base}--${mod}`

export const getFixClass = (mod: string) => {
  return (base: string) => `${base} ${base}--${mod}`
}