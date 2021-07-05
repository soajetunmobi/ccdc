import React from 'react'
import { AppLayout } from 'components/AppLayout'
import { render } from '@testing-library/react'

test('it renders AppLayout correctly', () => {
  const { container } = render(<AppLayout />)
  expect(container).toMatchSnapshot()
})
