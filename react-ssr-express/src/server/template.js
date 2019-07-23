export default (data, markup, helmet) => `
  <!DOCTYPE html>
  <html>
    <head>
      ${helmet.title}
      <script>window.__SERIALIZED_DATA__ = ${JSON.stringify(data)}</script>
    </head>
    <body>
      <div id="root">${markup}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`