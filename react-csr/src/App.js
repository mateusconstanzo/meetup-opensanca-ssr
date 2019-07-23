import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'

const App = () => (
  <div className="app">
    <main>
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) =>
          <Route key={path} path={path} exact={exact} component={Component} />)}
      </Switch>
    </main>
  </div>
)

export default App
