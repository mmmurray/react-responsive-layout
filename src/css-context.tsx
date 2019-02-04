import * as React from 'react'

type CSS = (css: any) => string

type CSSContext = {
  css: CSS
}

const CSSContext = React.createContext<CSSContext>({ css: () => '' })
const CSSConsumer = CSSContext.Consumer
const CSSProvider = CSSContext.Provider

const useCSS = () => React.useContext(CSSContext).css

export { CSSContext, CSSConsumer, CSSProvider, useCSS }
