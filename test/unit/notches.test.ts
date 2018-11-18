import notchesMQ from '../../src/helpers/notches'

test('single fluid notch', () => {
  const notches = [
    {
      width: Infinity,
      fluid: true,
    },
  ]

  expect(notchesMQ(notches, 100)).toBe(100)
})

test('two notches', () => {
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

  expect(notchesMQ(notches, 500)).toBe(500)
  expect(notchesMQ(notches, 599)).toBe(599)
  expect(notchesMQ(notches, 600)).toBe(Infinity)
  expect(notchesMQ(notches, 601)).toBe(Infinity)
})

test('multiple notches', () => {
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

  expect(notchesMQ(notches, 399)).toBe(399)
  expect(notchesMQ(notches, 400)).toBe(500)
  expect(notchesMQ(notches, 401)).toBe(500)
  expect(notchesMQ(notches, 499)).toBe(500)
  expect(notchesMQ(notches, 500)).toBe(600)
  expect(notchesMQ(notches, 501)).toBe(600)
  expect(notchesMQ(notches, 599)).toBe(600)
  expect(notchesMQ(notches, 600)).toBe(700)
  expect(notchesMQ(notches, 601)).toBe(700)
  expect(notchesMQ(notches, 699)).toBe(700)
  expect(notchesMQ(notches, 700)).toBe(Infinity)
  expect(notchesMQ(notches, 701)).toBe(Infinity)
})

test('mixed notches', () => {
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

  expect(notchesMQ(notches, 399)).toBe(399)
  expect(notchesMQ(notches, 400)).toBe(500)
  expect(notchesMQ(notches, 401)).toBe(500)
  expect(notchesMQ(notches, 499)).toBe(500)
  expect(notchesMQ(notches, 500)).toBe(500)
  expect(notchesMQ(notches, 501)).toBe(501)
  expect(notchesMQ(notches, 599)).toBe(599)
  expect(notchesMQ(notches, 600)).toBe(700)
  expect(notchesMQ(notches, 601)).toBe(700)
  expect(notchesMQ(notches, 699)).toBe(700)
  expect(notchesMQ(notches, 700)).toBe(Infinity)
  expect(notchesMQ(notches, 701)).toBe(Infinity)
})
