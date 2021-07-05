export const ccdcService = {
  fetchData
}

async function fetchData(url: string): Promise<IUnionFetchDataType> {
  const requestOptions = {
    method: 'GET'
  }

  const response = await fetch(url, requestOptions)
  if (!response.ok) {
    throwError(response.status, response.statusText)
  }
  try {
    return await response.json()
  } catch (e) {
    console.error(e)
    return undefined
  }
}

function throwError(statusCode: number, statusText: string) {
  const errorMessage = statusCode === 404 ? 'API Endpoint does not exist.' : statusText
  throw new Error(errorMessage)
}
