import React, { FC, PropsWithChildren, ReactNode } from 'react'

export const Main: FC = ({ children }: PropsWithChildren<ReactNode>) => {
  return <main className='content'>{children}</main>
}
