import React, { FC, useEffect, useState } from 'react'
import { LoadingIndicator } from 'components/shared/LoadingIndicator'
import { useFetch } from 'hooks/useFetch'
import { getCiteData } from 'const/endpoints'
import { DetailPanel } from '../../components/shared/DetailPanel'
import { TitleListPanel } from '../../components/shared/TitleListPanel'

export const HomePage: FC = () => {
  const [recordDetails, setRecordDetails] = useState<Array<RecordDetailObject>>()
  const [selectedRecord, setSelectedRecord] = useState<RecordDetailObject>()
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false)
  const [isFetchData, setIsFetchData] = useState<boolean>(true)

  const { isLoading, error, data } = useFetch({ url: getCiteData(), isRefresh: isFetchData })

  useEffect(() => {
    if (data) {
      const detailList: Array<RecordDetailObject> = []
      if (data.data && data.data.length > 0) {
        data.data.forEach((row: DataObject) => {
          const {
            id,
            attributes: { titles, subjects, url, publisher, publicationYear }
          } = row
          const detailObject = {
            id,
            title: titles[0].title,
            subjects,
            url,
            publisher,
            publicationYear
          }
          detailList.push(detailObject)
        })
        setRecordDetails(detailList)
      }
      setIsFetchData(false)
    }
    if (error) {
      setIsFetchData(false)
    }
  }, [data, error])

  const onCloseHandler = (): void => {
    setIsShowDetail(false)
    setSelectedRecord(undefined)
  }

  const onSelectHandler = (id: string): void => {
    if (id && recordDetails && recordDetails.length > 0) {
      const record = recordDetails.find(record => record.id === id)
      setSelectedRecord(record)
      setIsShowDetail(true)
    }
  }

  const renderContent = () => {
    if (isLoading && !data) {
      return <LoadingIndicator />
    }
    if (!isLoading && error && !data) {
      return <div data-testid='error'>{error}</div>
    }
    if (!isLoading && !error && data) {
      return (
        <div data-testid='data-wrapper'>
          {!isShowDetail && recordDetails && (
            <TitleListPanel records={recordDetails} onSelectHandler={onSelectHandler} />
          )}
          {isShowDetail && selectedRecord && (
            <DetailPanel detail={selectedRecord} onCloseHandler={onCloseHandler} />
          )}
        </div>
      )
    }
    return <div data-testid='no-data-found'>No data found</div>
  }

  return <div>{renderContent()}</div>
}
