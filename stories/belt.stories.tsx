import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Belt } from '../src'
import Box from './helpers/box'

storiesOf('Belt', module)
  .add('single fluid notch', () => {
    const notches = [
      {
        width: Infinity,
        fluid: true,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={500}>hello</Box>
      </Belt>
    )
  })
  .add('two notches', () => {
    const notches = [
      {
        width: 600,
        fluid: true,
      },
      {
        width: Infinity,
        fluid: false,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={500}>hello</Box>
      </Belt>
    )
  })
  .add('multipe notches', () => {
    const notches = [
      {
        width: 400,
        fluid: true,
      },
      {
        width: 500,
        fluid: true,
      },
      {
        width: 600,
        fluid: false,
      },
      {
        width: 700,
        fluid: true,
      },
      {
        width: 800,
        fluid: false,
      },
      {
        width: Infinity,
        fluid: false,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={579}>hello</Box>
      </Belt>
    )
  })
