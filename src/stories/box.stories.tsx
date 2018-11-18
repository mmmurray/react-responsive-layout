import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Box from './box'

storiesOf('Box', module).add('single box', () => (
  <Box maxWidth={600}>hello</Box>
))
