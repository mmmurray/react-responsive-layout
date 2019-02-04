type Range = { min: number; max: number }

const createRange = ({ min, max }: Range): string => {
  const minPart = min === 0 ? '' : ` and (min-width: ${min}px)`
  const maxPart = max === Infinity ? '' : ` and (max-width: ${max}px)`

  return `screen${minPart}${maxPart}`
}

const createMq = (ranges: Range[]): string => {
  return `@media ${ranges.map(createRange).join(', ')}`
}

export default createMq
