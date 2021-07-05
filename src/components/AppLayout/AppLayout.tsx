import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

export const AppLayout: FC = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
