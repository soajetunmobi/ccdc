import React from 'react'
import { TitleListPanel } from '../TitleListPanel'
import { fireEvent, render, screen } from '@testing-library/react'

describe('TitleListPanel', () => {
  const records: Array<RecordDetailObject> = [
    {
      id: 'test-id',
      title: 'Test title',
      url: 'https://test.com/test',
      subjects: [{ subject: 'Test subject' }],
      publisher: 'Test publisher',
      publicationYear: 2021
    }
  ]

  const mockedOnSelectHandler = jest.fn()

  test('it renders correctly', () => {
    const { container } = render(
      <TitleListPanel records={records} onSelectHandler={mockedOnSelectHandler} />
    )
    expect(container).toMatchSnapshot()
  })

  test('it renders title', () => {
    render(<TitleListPanel records={records} onSelectHandler={mockedOnSelectHandler} />)
    expect(screen.getByText(records[0].title)).toBeInTheDocument()
  })

  test('should be able to view detail', () => {
    render(<TitleListPanel records={records} onSelectHandler={mockedOnSelectHandler} />)
    const row = screen.getByText(records[0].title)
    expect(row).toBeInTheDocument()
    fireEvent.click(row)
    expect(mockedOnSelectHandler).toBeCalled()
  })
})
