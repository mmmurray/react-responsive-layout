import createMq from '../../src/helpers/mq'

test('single range', () => {
  const mq = createMq([{ min: 100, max: 200 }])

  expect(mq).toBe('@media screen and (min-width: 100px) and (max-width: 200px)')
})
