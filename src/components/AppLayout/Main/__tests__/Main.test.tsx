import React from 'react'
import { Main } from '../Main'
import { render } from '@testing-library/react'

test('it renders Main correctly', () => {
  const { container } = render(<Main />)
  expect(container).toMatchSnapshot()
})
