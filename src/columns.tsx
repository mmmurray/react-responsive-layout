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

const createStyles = (gap: number, ratios: number[]) => ({
  display: 'grid',
  gridColumnGap: `${gap}px`,
  gridTemplateColumns: ratios.map(ratio => `minmax(0, ${ratio}fr)`).join(' '),
  width: '100%',
})

const Columns: React.SFC<ColumnsProps> = ({
  gap = 0,
  ratios = [],
  children,
}) => {
  const totalRatio = ratios.reduce((acc, ratio) => acc + ratio)
  const totalGap = gap * (ratios.length - 1)

  return (
    <CSSConsumer>
      {({ css }) => {
        const wrappedChildren = React.Children.map(children, (child, index) => {
          const ratio = ratios[index]
          const mq = (width: number) => width * (totalRatio / ratio) + totalGap

          return (
            <MQProvider key={index} mq={mq}>
              {child}
            </MQProvider>
          )
        })

        return (
          <div className={css(createStyles(gap, ratios))}>
            {wrappedChildren}
          </div>
        )
      }}
    </CSSConsumer>
  )
}

export default Columns
