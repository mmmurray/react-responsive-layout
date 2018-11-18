import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Belt } from '../src'
import Box from './helpers/box'

storiesOf('Belt', module)
  .add('single fluid notch no padding', () => {
    const notches = [
      {
        width: Infinity,
        fluid: true,
        padding: 0,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={500}>hello</Box>
      </Belt>
    )
  })
  .add('single fluid notch with padding', () => {
    const notches = [
      {
        width: Infinity,
        fluid: true,
        padding: 20,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={500}>hello</Box>
      </Belt>
    )
  })
  .add('multiple fluid notches with changing padding', () => {
    const notches = [
      {
        width: 400,
        fluid: true,
        padding: 0,
      },
      {
        width: 500,
        fluid: true,
        padding: 10,
      },
      {
        width: 600,
        fluid: true,
        padding: 20,
      },
      {
        width: 700,
        fluid: true,
        padding: 30,
      },
      {
        width: Infinity,
        fluid: true,
        padding: 40,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={500}>hello</Box>
      </Belt>
    )
  })
  .add('two notches with padding', () => {
    const notches = [
      {
        width: 600,
        fluid: true,
        padding: 20,
      },
      {
        width: Infinity,
        fluid: false,
        padding: 20,
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
        padding: 5,
      },
      {
        width: 500,
        fluid: true,
        padding: 10,
      },
      {
        width: 600,
        fluid: false,
        padding: 10,
      },
      {
        width: 700,
        fluid: true,
        padding: 15,
      },
      {
        width: 800,
        fluid: false,
        padding: 15,
      },
      {
        width: Infinity,
        fluid: false,
        padding: 15,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={579}>hello</Box>
      </Belt>
    )
  })
