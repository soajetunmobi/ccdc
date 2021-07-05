import React, { FC } from 'react'

interface IDetailPanelProps {
  records: Array<RecordDetailObject>
  onSelectHandler: (id: string) => void
}

export const TitleListPanel: FC<IDetailPanelProps> = props => {
  const { records, onSelectHandler } = props
  return (
    <div className=''>
      <h2>Records</h2>
      <div className='record'>
        {records &&
          records.map((record, index) => (
            <div
              className={`record-row ${(index + 1) % 2 === 0 ? 'even' : 'odd'}`}
              key={record.id}
              onClick={() => {
                onSelectHandler(record.id)
              }}
            >
              {record.title}
            </div>
          ))}
      </div>
    </div>
  )
}
