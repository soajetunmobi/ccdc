import React from 'react'
import { App } from '../App'
import { render } from '@testing-library/react'

test('it renders App correctly', () => {
  const { container } = render(<App />)
  expect(container).toMatchSnapshot()
})
