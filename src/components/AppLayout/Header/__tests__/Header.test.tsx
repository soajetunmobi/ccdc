import React from 'react'
import { Header } from '../Header'
import { render } from '@testing-library/react'

it('renders Header correctly', () => {
  const { container } = render(<Header />)
  expect(container).toMatchSnapshot()
})
