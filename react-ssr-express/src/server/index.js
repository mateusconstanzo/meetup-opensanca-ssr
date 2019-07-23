import express from 'express'
import cors from 'cors'
import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { matchPath, StaticRouter } from 'react-router-dom'

import App from '../shared/App'
import routes from '../shared/routes'
import template from './template'

const app = express()

app.use(cors())

app.use(express.static('static'))

app.get('*', (req, res, next) => {

  const dataRequirements =
    routes
      .filter(route => matchPath(req.url, route)) // filter matching paths
      .map(route => route.component) // map to components
      .filter(comp => comp.getInitialProps) // check if components have data requirement
      .map(comp => comp.getInitialProps(req)) // dispatch getInitialProps

  Promise.all(dataRequirements).then((result) => {

    const [data] = result

    const jsx = (
      <StaticRouter location={req.url} context={{ data }}>
        <App />
      </StaticRouter>
    )

    const reactDom = renderToString(jsx)

    const helmet = Helmet.renderStatic()

    res.send(template(data, reactDom, helmet))

  })

})

const PORT = 4000

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`)
})
