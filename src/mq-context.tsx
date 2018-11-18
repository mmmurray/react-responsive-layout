import * as React from 'react'

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

export default MQContext
export { MQConsumer, MQProvider }
