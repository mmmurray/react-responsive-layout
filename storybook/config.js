import { withOptions } from '@storybook/addon-options'
import { themes } from '@storybook/components'
import { addDecorator, configure } from '@storybook/react'

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context('../src', true, /\.stories\.tsx$/))
}

addDecorator(
  withOptions({
    name: 'react responsive layout',
    url: 'https://github.com/mmmurray/react-responsive-layout',
    theme: themes.dark,
  }),
)

configure(loadStories, module)
