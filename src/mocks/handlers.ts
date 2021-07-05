import { rest } from 'msw'
import { dataCiteMock } from '../testUtils/dataCiteMock'

export const handlers = [
  rest.get('https://api.test.datacite.org/dois', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataCiteMock))
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`)
  })
]
