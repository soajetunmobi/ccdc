import { useCallback, useEffect, useState } from 'react'
import { ccdcService } from 'services/ccdcService'

interface IFetchResponse {
  data?: IUnionFetchDataType
  isLoading: boolean
  error?: string
}

interface IUseFetchProps {
  url: string
  isRefresh?: boolean
}

export const useFetch = (props: IUseFetchProps): IFetchResponse => {
  const { url, isRefresh = true } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()
  const [data, setData] = useState<IUnionFetchDataType>()
  const [isMounted, setIsMount] = useState<boolean>(true)

  const fetchDataHandler = useCallback(async () => {
    setError(undefined)
    setIsLoading(true)

    try {
      if (isRefresh && isMounted) {
        const response = await ccdcService.fetchData(url)
        setData(response)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [setData, setIsLoading, setError, url, isRefresh])

  useEffect(() => {
    fetchDataHandler()

    return () => {
      setIsMount(true)
    }
  }, [url, isRefresh])

  return { isLoading, error, data }
}
