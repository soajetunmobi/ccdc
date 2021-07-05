import { ccdcService } from '../ccdcService'
import { getCiteData } from '../../const/endpoints'
import { dataCiteMock } from '../../testUtils/dataCiteMock'
import { rest } from 'msw'
import { server } from '../../mocks/server'

it('fetches data correctly', async () => {
  const data = await ccdcService.fetchData(getCiteData())
  expect(data).toEqual(dataCiteMock)
})

it('handles failure', async () => {
  server.use(
    rest.get('https://api.test.datacite.org/dois', (req, res, ctx) => {
      return res(ctx.status(404))
    })
  )
  await expect(ccdcService.fetchData(getCiteData())).rejects.toThrowError(
    'API Endpoint does not exist.'
  )
})
