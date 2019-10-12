import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import { css, injectGlobal } from 'emotion'
import React from 'react'
import { CSSProvider } from '../src/css-context'

const loadStories = () => {
  const requireContext = require.context(
    '../src/stories',
    true,
    /\.stories\.tsx$/,
  )

  requireContext.keys().map(requireContext)
}

injectGlobal({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    fontFamily: 'monospace',
  },
})

addParameters({
  options: {
    theme: {
      ...themes.dark,
      brandTitle: 'react-responsive-layout',
      brandUrl: 'https://github.com/mmmurray/react-responsive-layout',
    },
  },
})

addDecorator(story => <CSSProvider value={{ css }}>{story()}</CSSProvider>)

addDecorator(withKnobs)

configure(loadStories, module)
