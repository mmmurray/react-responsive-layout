import * as React from 'react'
import createMq from './helpers/mq'

type MQFunction = (width: number) => number

type MQContext = {
  mq: MQFunction
}

type MQProviderProps = {
  mq: MQFunction
}

const MQContext = React.createContext<MQContext>({ mq: width => width })

const MQConsumer = MQContext.Consumer

const MQProvider: React.SFC<MQProviderProps> = ({ mq, children }) => (
  <MQConsumer>
    {({ mq: parentMq }) => (
      <MQContext.Provider value={{ mq: width => parentMq(mq(width)) }}>
        {children}
      </MQContext.Provider>
    )}
  </MQConsumer>
)

const useMediaQuery = (width: number) => {
  const { mq } = React.useContext(MQContext)

  return createMq([{ min: mq(width), max: Infinity }])
}

export default MQContext
export { MQConsumer, MQProvider, useMediaQuery }
