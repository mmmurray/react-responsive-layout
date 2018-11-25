# React Responsive Layout

[![Travis](https://img.shields.io/travis/mmmurray/react-responsive-layout.svg)](https://travis-ci.org/mmmurray/react-responsive-layout)
[![npm](https://img.shields.io/npm/v/react-responsive-layout.svg)](https://www.npmjs.com/package/react-responsive-layout)

A library of layout components designed to enable [container queries](https://css-tricks.com/container-query-discussion/) without JavaScript.

### ⚠️ Note: This library is still in alpha, expect breaking changes.

## Motivation

CSS media queries let us build responsive layouts by applying different styles at different window breakpoints. However, in component based UIs, it is often useful to apply styles based on the width of the parent container so that the component can be used in different contexts.

CSS doesn't yet have support for container queries (media queries that operate at the component level). There are many libraries which attempt to fill this shortcoming but they typically rely on JavaScript DOM events which can be slow.

This library allows you to use container queries without JavaScript enabled by transforming container queries into native CSS media queries.

## Install

```
yarn add react-responsive-layout
```

## Usage

In order to generate accurate media queries, all horizontal spacing must be applied by the components in this library and the root element must span the full width of the browser viewport.

The components rely on a CSS-in-JS library of your choosing. You must provide a function which generates a class name based on an object of styles.

Example using emotion ([CodeSandbox link](https://codesandbox.io/s/rl0vjonq1n)):

```jsx
import ReactDOM from 'react-dom'
import React, { useContext } from 'react'
import { css } from 'emotion'
import { Belt, Columns, CSSProvider, MQContext } from 'react-responsive-layout'

const createStyles = maxWidth => css`
  background-color: red;
  height: 100px;
  padding: 10px;

  @media (max-width: ${maxWidth}px) {
    background-color: lime;
  }
`

const MyResponsiveComponent = () => {
  const { mq } = useContext(MQContext)
  const breakpoint = mq(200)
  const maxWidth = isFinite(breakpoint) ? breakpoint - 1 : 1000000

  return <div className={createStyles(maxWidth)}>Hello</div>
}

const notches = [
  { width: 850, fluid: true },
  { width: 1000, fluid: false },
  { fluid: false },
]

const App = () => (
  <CSSProvider value={{ css }}>
    <Belt notches={notches}>
      <Columns ratios={[1, 2, 1]} gap={10}>
        <MyResponsiveComponent />
        <MyResponsiveComponent />
        <MyResponsiveComponent />
      </Columns>
    </Belt>
  </CSSProvider>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

This will render 3 columns with the middle column being twice as wide as the other two. At different window widths, the following will be rendered:

#### Below 420px

![](docs/small.png)

#### Between 820px and 420px

![](docs/medium.png)

#### Above 820px

![](docs/large.png)

## Components

### Columns

Props

| Name     | Type       | Default  | Description                                                                                                                                          |
| -------- | ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ratios` | `number[]` | Required | The proportions to render each column. Equates to [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns). |
| `gap`    | `number`   | `0`      | The fixed spacing between each column (in pixels). Equates to [`grid-column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)       |

### Belt

Constrain the child component to certain widths at different breakpoints.

Props

| Name      | Type                                      | Default  | Description                                               |
| --------- | ----------------------------------------- | -------- | --------------------------------------------------------- |
| `notches` | `Array<{ width: number, fluio: boolean}>` | Required | The widths at which the content should be constrained to. |
