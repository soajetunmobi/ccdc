import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { DetailPanel } from '../DetailPanel'

describe('DetailPanel', () => {
  const detail: RecordDetailObject = {
    id: 'test-id',
    title: 'Test title',
    url: 'https://test.com/test',
    subjects: [{ subject: 'Test subject' }],
    publisher: 'Test publisher',
    publicationYear: 2021
  }
  const mockedOnCloseHandler = jest.fn()

  test('it renders correctly', () => {
    const { container } = render(
      <DetailPanel detail={detail} onCloseHandler={mockedOnCloseHandler} />
    )
    expect(container).toMatchSnapshot()
  })

  test('it renders publisher', () => {
    render(<DetailPanel detail={detail} onCloseHandler={mockedOnCloseHandler} />)
    expect(screen.getByText(detail.publisher)).toBeInTheDocument()
  })

  test('it renders publication year', () => {
    render(<DetailPanel detail={detail} onCloseHandler={mockedOnCloseHandler} />)
    expect(screen.getByText(detail.publicationYear)).toBeInTheDocument()
  })

  test('it renders url', () => {
    render(<DetailPanel detail={detail} onCloseHandler={mockedOnCloseHandler} />)
    expect(screen.getByText(detail.url)).toBeInTheDocument()
  })

  test('should go back to list', () => {
    render(<DetailPanel detail={detail} onCloseHandler={mockedOnCloseHandler} />)
    const backButton = screen.getByTestId('back-button')
    expect(backButton).toBeInTheDocument()
    fireEvent.click(backButton)
    expect(mockedOnCloseHandler).toBeCalled()
  })
})
