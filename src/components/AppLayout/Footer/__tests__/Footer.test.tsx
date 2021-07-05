import React from 'react'
import { Footer } from 'components/AppLayout/Footer'
import { render } from '@testing-library/react'

test('it renders Footer correctly', () => {
  const { container } = render(<Footer />)
  expect(container).toMatchSnapshot()
})
