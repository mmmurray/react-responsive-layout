import * as React from 'react'
import { CSSConsumer } from './css-context'
import { MQProvider } from './mq-context'
import Notch from './types/notch'
import notchesMQ from './helpers/notches'

type BeltProps = {
  notches: Notch[]
  props?: React.HTMLProps<HTMLDivElement>
}

const createNotchStyles = (maxWidth: number = 0, fluid: boolean = false) => ({
  boxSizing: 'border-box',
  margin: '0 auto',
  maxWidth: maxWidth && !fluid ? `${maxWidth}px` : 'auto',
  width: '100%',
})

const createNotchSelector = (from: number, to: number) =>
  isFinite(to)
    ? `@media (min-width: ${from}px) and (max-width: ${to - 1}px)`
    : `@media (min-width: ${from}px)`

const createStyles = (notches: Notch[]) => {
  return notches.reduce((acc, notch, index) => {
    const previousWidth = index === 0 ? 0 : notches[index - 1].width
    const selector = createNotchSelector(previousWidth, notch.width)
    const notchStyles = createNotchStyles(previousWidth, notch.fluid)

    return { ...acc, [selector]: notchStyles }
  }, {})
}

const Belt: React.SFC<BeltProps> = ({ notches, props = {}, children }) => {
  const mq = (width: number) => notchesMQ(notches, width)

  return (
    <CSSConsumer>
      {({ css }) => {
        return (
          <MQProvider mq={mq}>
            <div {...props} className={css(createStyles(notches))}>
              {children}
            </div>
          </MQProvider>
        )
      }}
    </CSSConsumer>
  )
}

export default Belt
