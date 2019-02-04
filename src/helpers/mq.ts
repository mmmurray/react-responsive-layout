type Range = { min: number; max: number }

const createRange = ({ min, max }: Range): string =>
  `screen and (min-width: ${min}px) and (max-width: ${max}px)`

const createMq = (ranges: Range[]): string => {
  return `@media ${ranges.map(createRange).join('')}`
}

export default createMq
