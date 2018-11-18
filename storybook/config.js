import { withOptions } from '@storybook/addon-options'
import { themes } from '@storybook/components'
import { addDecorator, configure } from '@storybook/react'
import { injectGlobal } from 'emotion'

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context('../src', true, /\.stories\.tsx$/))
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

configure(loadStories, module)
