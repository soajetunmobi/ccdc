import React, { FunctionComponent } from 'react'
import { routes } from 'const/routes'
import { useHistory } from 'react-router-dom'

export const Header: FunctionComponent = () => {
  const history = useHistory()

  return (
    <div className='header'>
      <div className='logo'>
        <span
          className='cursor--pointer'
          data-testid='logo-link'
          onClick={() => history.push(routes.home)}
        >
          CCDC
        </span>
      </div>
    </div>
  )
}
