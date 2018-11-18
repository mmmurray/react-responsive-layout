import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Box from './helpers/box'

storiesOf('Box', module).add('single box', () => <Box maxWidth={600} />)
