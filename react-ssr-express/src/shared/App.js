import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'
import UniversalDataloader from './UniversalDataloader'

const App = () => (
  <div className="app">
    <main>
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) =>
          <Route
            key={path}
            path={path}
            exact={exact}

            render={props => (
              <UniversalDataloader {...props} {...rest} >
                {dataProps => <Component {...dataProps} />}
              </UniversalDataloader>
            )}

          />)}
      </Switch>
    </main>
  </div>
)

export default App
