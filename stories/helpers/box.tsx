import * as React from 'react'
import { SFC, useContext } from 'react'
import { CSSContext, useMediaQuery } from '../../src'
import useCurrentWidth from './use-current-width'

type BoxProps = {
  maxWidth: number
}

const createStyles = (mq: string) => ({
  backgroundColor: '#1bc567',
  boxShadow: '0 0 0 1px white inset',
  color: 'white',
  height: '100px',
  padding: '10px',
  width: '100%',
  [mq]: {
    backgroundColor: '#c51b62',
  },
})

const Box: SFC<BoxProps> = ({ maxWidth }) => {
  const { css } = useContext(CSSContext)
  const mq = useMediaQuery(maxWidth)
  const { ref, width } = useCurrentWidth<HTMLDivElement>()

  return (
    <div ref={ref} className={css(createStyles(mq))}>
      {width}/{maxWidth}
    </div>
  )
}

export default Box
