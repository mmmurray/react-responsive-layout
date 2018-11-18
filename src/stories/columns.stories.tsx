import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Columns from '../columns'
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
