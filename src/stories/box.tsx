import * as React from 'react'
import styled from 'react-emotion'

type BoxProps = {
  maxWidth: number
}

const StyledBox = styled('div')<BoxProps>(
  {
    backgroundColor: '#c51b62',
    color: 'white',
    height: '100px',
    padding: '10px',
    width: '100%',
  },
  props => ({
    [`@media (max-width: ${props.maxWidth}px)`]: {
      backgroundColor: '#1bc567',
    },
  }),
)

const Box: React.SFC<BoxProps> = ({ maxWidth }) => {
  const ref = React.useRef({ clientWidth: 0 })
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    const resizeHandler = () => setWidth(ref.current.clientWidth)
    window.addEventListener('resize', resizeHandler)
    resizeHandler()

    return () => window.removeEventListener('resize', resizeHandler)
  })

  return (
    <StyledBox innerRef={ref} maxWidth={maxWidth}>
      {width}/{maxWidth}
    </StyledBox>
  )
}

export default Box
