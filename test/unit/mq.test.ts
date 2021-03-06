import createMq from '../../src/helpers/mq'

test('single range', () => {
  const mq = createMq([{ min: 100, max: 200 }])

  expect(mq).toBe('@media screen and (min-width: 100px) and (max-width: 200px)')
})

test('multiple ranges', () => {
  const mq = createMq([
    { min: 100, max: 200 },
    { min: 300, max: 400 },
    { min: 500, max: 600 },
  ])

  expect(mq).toBe(
    '@media screen and (min-width: 100px) and (max-width: 200px), screen and (min-width: 300px) and (max-width: 400px), screen and (min-width: 500px) and (max-width: 600px)',
  )
})

test('zero minimum', () => {
  const mq = createMq([{ min: 0, max: 200 }])

  expect(mq).toBe('@media screen and (max-width: 200px)')
})

test('infinity maximum', () => {
  const mq = createMq([{ min: 100, max: Infinity }])

  expect(mq).toBe('@media screen and (min-width: 100px)')
})
