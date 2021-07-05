import React from 'react'
import { LoadingIndicator } from 'components/shared/LoadingIndicator'
import { render } from '@testing-library/react'

test('it renders correctly', () => {
  const { container } = render(<LoadingIndicator />)
  expect(container).toMatchSnapshot()
})
