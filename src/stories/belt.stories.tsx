import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Belt, Columns } from '..'
import Box from './helpers/box'

storiesOf('Belt', module)
  .add('single fluid notch', () => {
    const maxWidth = number('maxWidth', 500)

    const notches = [
      {
        width: Infinity,
        fluid: true,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={maxWidth} />
      </Belt>
    )
  })
  .add('two notches', () => {
    const maxWidth = number('maxWidth', 500)

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
        <Box maxWidth={maxWidth} />
      </Belt>
    )
  })
  .add('multiple fixed notches', () => {
    const maxWidth = number('maxWidth', 550)

    const notches = [
      {
        width: 400,
        fluid: true,
      },
      {
        width: 500,
        fluid: false,
      },
      {
        width: 600,
        fluid: false,
      },
      {
        width: 700,
        fluid: false,
      },
      {
        width: Infinity,
        fluid: false,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={maxWidth} />
      </Belt>
    )
  })
  .add('mixed notches', () => {
    const maxWidth = number('maxWidth', 550)

    const notches = [
      {
        width: 400,
        fluid: true,
      },
      {
        width: 500,
        fluid: false,
      },
      {
        width: 600,
        fluid: true,
      },
      {
        width: 700,
        fluid: false,
      },
      {
        width: Infinity,
        fluid: false,
      },
    ]

    return (
      <Belt notches={notches}>
        <Box maxWidth={maxWidth} />
      </Belt>
    )
  })
  .add('with columns', () => {
    const maxWidth = number('maxWidth', 250)

    const notches = [
      {
        width: 400,
        fluid: true,
      },
      {
        width: 500,
        fluid: false,
      },
      {
        width: 600,
        fluid: false,
      },
      {
        width: 700,
        fluid: false,
      },
      {
        width: Infinity,
        fluid: false,
      },
    ]

    return (
      <Belt notches={notches}>
        <Columns ratios={[2, 3]} gap={10}>
          <Box maxWidth={maxWidth} />
          <Box maxWidth={maxWidth} />
        </Columns>
      </Belt>
    )
  })
