import React, { FC } from 'react'

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <span>CCDC</span>
      <br />
      {currentYear}
    </footer>
  )
}
