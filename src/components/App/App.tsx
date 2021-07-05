import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from '../AppLayout/'
import Routes from 'routing/Routes'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes />
      </AppLayout>
    </BrowserRouter>
  )
}
