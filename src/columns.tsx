import * as React from 'react'
import { CSSConsumer } from './css-context'
import cx from './helpers/cx'
import { MQProvider } from './mq-context'

type Column = {
  type: 'ratio' | 'fixed'
  value: number
}

type ColumnsProps = {
  gap?: number
  rowGap?: number
  columnGap?: number
  ratios?: number[]
  columns?: Column[]
  props?: React.HTMLProps<HTMLDivElement>
}

const createSizeFromColumn = ({ type, value }: Column): string => {
  if (type === 'ratio') {
    return `${value}fr`
  }
  if (type === 'fixed') {
    return `${value}px`
  }
  return '0'
}

const createStyles = (props: {
  columns: Column[]
  rowGap: number
  columnGap: number
}) => ({
  display: 'grid',
  gridColumnGap: `${props.columnGap}px`,
  gridRowGap: `${props.rowGap}px`,
  gridTemplateColumns: props.columns
    .map(column => `minmax(0, ${createSizeFromColumn(column)})`)
    .join(' '),
  width: '100%',
})

const Columns: React.SFC<ColumnsProps> = ({
  gap = 0,
  rowGap = gap,
  columnGap = gap,
  ratios = [],
  columns = ratios.map<Column>(value => ({ type: 'ratio', value })),
  props = {},
  children,
}) => {
  const totalRatio = columns.reduce(
    (acc, { type, value }) => (type === 'ratio' ? acc + value : acc),
    0,
  )
  const totalFixed = columns.reduce(
    (acc, { type, value }) => (type === 'fixed' ? acc + value : acc),
    0,
  )
  const totalGap = columnGap * (columns.length - 1)

  return (
    <CSSConsumer>
      {({ css }) => {
        const wrappedChildren = React.Children.map(children, (child, index) => {
          const { type, value } = columns[index % columns.length]
          const mq = (width: number) => {
            if (type === 'ratio') {
              return width * (totalRatio / value) + totalGap + totalFixed
            }

            return value < width ? Infinity : 0
          }

          return (
            <MQProvider key={index} mq={mq}>
              {child}
            </MQProvider>
          )
        })

        return (
          <div
            {...props}
            className={cx(
              css(createStyles({ columns, columnGap, rowGap })),
              props.className,
            )}
          >
            {wrappedChildren}
          </div>
        )
      }}
    </CSSConsumer>
  )
}

export default Columns
