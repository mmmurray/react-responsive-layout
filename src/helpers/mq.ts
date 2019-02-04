type Range = { min: number; max: number }

const createRange = ({ min, max }: Range): string => {
  const minPart = min === 0 ? '' : ` and (min-width: ${min}px)`

  return `screen${minPart} and (max-width: ${max}px)`
}

const createMq = (ranges: Range[]): string => {
  return `@media ${ranges.map(createRange).join(', ')}`
}

export default createMq
