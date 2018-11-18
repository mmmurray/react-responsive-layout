import * as React from 'react'
import { SFC, useContext } from 'react'
import CSSContext from '../../css-context'
import MQContext from '../../mq-context'
import useCurrentWidth from './use-current-width'

type BoxProps = {
  maxWidth: number
}

const createStyles = (maxWidth: number) => ({
  backgroundColor: '#c51b62',
  boxShadow: '0 0 0 1px white inset',
  color: 'white',
  height: '100px',
  padding: '10px',
  width: '100%',
  [`@media (max-width: ${maxWidth}px)`]: {
    backgroundColor: '#1bc567',
  },
})

const Box: SFC<BoxProps> = ({ maxWidth }) => {
  const { css } = useContext(CSSContext)
  const { mq } = useContext(MQContext)
  const { ref, width } = useCurrentWidth<HTMLDivElement>()

  return (
    <div ref={ref} className={css(createStyles(mq(maxWidth)))}>
      {width}/{maxWidth}
    </div>
  )
}

export default Box
