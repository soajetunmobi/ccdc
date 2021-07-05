import React from 'react'
import { HomePage } from '../HomePage'
import { act, render, screen, waitFor } from '@testing-library/react'

describe('HomePage', () => {
  it('renders home page', () => {
    const { container } = render(<HomePage />)
    expect(container).toMatchSnapshot()
  })

  it('render record list', async () => {
    await act(async () => {
      await render(<HomePage />)
      await waitFor(() => screen.getByTestId('data-wrapper'))
      await expect(
        screen.getByText('CCDC 1654135: Experimental Crystal Structure Determination')
      ).toBeInTheDocument()
    })
  })
})
