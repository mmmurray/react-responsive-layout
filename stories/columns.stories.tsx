import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Columns } from '../src'
import Box from './helpers/box'

storiesOf('Columns', module)
  .add('two equal columns', () => (
    <Columns ratios={[1, 1]}>
      <Box maxWidth={300} />
      <Box maxWidth={300} />
    </Columns>
  ))
  .add('two equal columns with gap', () => (
    <Columns ratios={[1, 1]} gap={10}>
      <Box maxWidth={300} />
      <Box maxWidth={300} />
    </Columns>
  ))
  .add('four equal columns', () => (
    <Columns ratios={[1, 1, 1, 1]}>
      <Box maxWidth={150} />
      <Box maxWidth={150} />
      <Box maxWidth={150} />
      <Box maxWidth={150} />
    </Columns>
  ))
  .add('four equal columns with gap', () => (
    <Columns ratios={[1, 1, 1, 1]} gap={10}>
      <Box maxWidth={150} />
      <Box maxWidth={150} />
      <Box maxWidth={150} />
      <Box maxWidth={150} />
    </Columns>
  ))
  .add('three unequal columns', () => (
    <Columns ratios={[1, 2, 3]}>
      <Box maxWidth={200} />
      <Box maxWidth={200} />
      <Box maxWidth={200} />
    </Columns>
  ))
  .add('three unequal columns with gap', () => (
    <Columns ratios={[1, 2, 3]} gap={10}>
      <Box maxWidth={200} />
      <Box maxWidth={200} />
      <Box maxWidth={200} />
    </Columns>
  ))
  .add('nested columns', () => (
    <Columns ratios={[2, 1]} gap={10}>
      <Columns ratios={[1, 1]} gap={5}>
        <Box maxWidth={200} />
        <Box maxWidth={200} />
      </Columns>
      <Box maxWidth={200} />
    </Columns>
  ))
  .add('one fixed column', () => (
    <Columns
      columns={[
        {
          type: 'fixed',
          value: 200,
        },
        {
          type: 'ratio',
          value: 1,
        },
      ]}
      gap={10}
    >
      <Box maxWidth={300} />
      <Box maxWidth={300} />
    </Columns>
  ))
  .add('two fixed columns', () => (
    <Columns
      columns={[
        {
          type: 'fixed',
          value: 200,
        },
        {
          type: 'ratio',
          value: 2,
        },
        {
          type: 'fixed',
          value: 100,
        },
        {
          type: 'ratio',
          value: 3,
        },
      ]}
      gap={10}
    >
      <Box maxWidth={200} />
      <Box maxWidth={200} />
      <Box maxWidth={200} />
      <Box maxWidth={200} />
    </Columns>
  ))
