import * as React from 'react'
import { CSSConsumer } from './css-context'
import { MQProvider } from './mq-context'

type Column = {
  type: 'ratio' | 'fixed'
  value: number
}

type ColumnsProps = {
  gap?: number
  ratios?: number[]
  columns?: Column[]
}

const createStyles = (gap: number, columns: Column[]) => ({
  display: 'grid',
  gridColumnGap: `${gap}px`,
  gridTemplateColumns: columns
    .map(({ value }) => `minmax(0, ${value}fr)`)
    .join(' '),
  width: '100%',
})

const Columns: React.SFC<ColumnsProps> = ({
  gap = 0,
  ratios = [],
  columns = ratios.map<Column>(value => ({ type: 'ratio', value })),
  children,
}) => {
  const totalRatio = columns.reduce(
    (acc, { type, value }) => (type === 'ratio' ? acc + value : acc),
    0,
  )
  const totalGap = gap * (columns.length - 1)

  return (
    <CSSConsumer>
      {({ css }) => {
        const wrappedChildren = React.Children.map(children, (child, index) => {
          const { value } = columns[index]
          const mq = (width: number) => width * (totalRatio / value) + totalGap

          return (
            <MQProvider key={index} mq={mq}>
              {child}
            </MQProvider>
          )
        })

        return (
          <div className={css(createStyles(gap, columns))}>
            {wrappedChildren}
          </div>
        )
      }}
    </CSSConsumer>
  )
}

export default Columns
