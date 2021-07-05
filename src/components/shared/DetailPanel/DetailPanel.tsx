import React, { FC } from 'react'

interface IDetailPanelProps {
  detail: RecordDetailObject
  onCloseHandler: CallableFunction
}

export const DetailPanel: FC<IDetailPanelProps> = props => {
  const { detail, onCloseHandler } = props

  const formatSubjectsToString = (subjects: Array<SubjectsType>): string => {
    const strVal: Array<string> = []
    subjects.forEach(sub => {
      strVal.push(sub.subject)
    })
    return strVal.join(',')
  }

  return (
    <div>
      <h2>Detail</h2>
      <div className='detail-row'>
        <div tabIndex={0} className='detail-label'>
          Publication year:
        </div>
        <div>{detail?.publicationYear}</div>
      </div>
      <div className='detail-row'>
        <div tabIndex={1} className='detail-label'>
          Publisher:
        </div>
        <div>{detail?.publisher}</div>
      </div>
      <div className='detail-row'>
        <div tabIndex={2} className='detail-label'>
          Subjects:
        </div>
        <div>{formatSubjectsToString(detail?.subjects)}</div>
      </div>
      <div className='detail-row'>
        <div tabIndex={3} className='detail-label'>
          URL:
        </div>
        <div>{detail?.url}</div>
      </div>
      <div className='margin-top--20'>
        <span
          role='button'
          tabIndex={4}
          data-testid='back-button'
          className='button'
          onClick={() => onCloseHandler()}
        >
          Back
        </span>
      </div>
    </div>
  )
}
