import { withOptions } from '@storybook/addon-options'
import { themes } from '@storybook/components'
import { addDecorator, configure } from '@storybook/react'
import { injectGlobal } from 'emotion'
import React from 'react'
import { css } from 'react-emotion'
import { CSSProvider } from '../src/css-context'

const loadStories = () => {
  const requireContext = require.context('../stories', true, /\.stories\.tsx$/)

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

addDecorator(
  withOptions({
    name: 'react responsive layout',
    url: 'https://github.com/mmmurray/react-responsive-layout',
    theme: themes.dark,
  }),
)

addDecorator(story => <CSSProvider value={{ css }}>{story()}</CSSProvider>)

configure(loadStories, module)
