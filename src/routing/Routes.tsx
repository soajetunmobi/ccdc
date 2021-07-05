import React, { FunctionComponent } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from 'const/routes'
import { HomePage } from 'pages/HomePage'

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Redirect to={routes.home} />
    </Switch>
  )
}

export default Routes
