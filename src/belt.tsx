import * as React from 'react'
import { CSSConsumer } from './css-context'
import { MQProvider } from './mq-context'
import Notch from './types/notch'

type BeltProps = {
  notches: Notch[]
}

const createNotchStyles = (
  maxWidth: number = 0,
  padding: number = 0,
  fluid: boolean = false,
) => ({
  boxSizing: 'border-box',
  margin: '0 auto',
  maxWidth: maxWidth && !fluid ? `${maxWidth}px` : 'auto',
  padding: `0 ${padding || 0}px`,
  width: '100%',
})

const createNotchSelector = (from: number, to: number) =>
  isFinite(to)
    ? `@media (min-width: ${from}px) and (max-width: ${to}px)`
    : `@media (min-width: ${from}px)`

const createStyles = (notches: Notch[]) => {
  return notches.reduce((acc, notch, index) => {
    const previousWidth = index === 0 ? 0 : notches[index - 1].width

    const selector = createNotchSelector(previousWidth, notch.width)

    const notchStyles = createNotchStyles(
      previousWidth,
      notch.padding,
      notch.fluid,
    )

    return { ...acc, [selector]: notchStyles }
  }, {})
}

const Belt: React.SFC<BeltProps> = ({ notches, children }) => {
  const maxWidth = 600
  const padding = 10

  const mq = (width: number) =>
    width >= maxWidth - padding * 2 ? 1000000 : width + padding * 2

  return (
    <CSSConsumer>
      {({ css }) => {
        return (
          <MQProvider mq={mq}>
            <div className={css(createStyles(notches))}>{children}</div>
          </MQProvider>
        )
      }}
    </CSSConsumer>
  )
}

export default Belt
