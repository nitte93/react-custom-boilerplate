import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'react-dom/server'
import { useRouterHistory, RouterContext, match } from 'react-router';
import routes from './routes';

const Express = require('express');
const server = new Express();
let port = process.env.PORT || 3000;


server.get('*', (req, res, next) =>{
  const location = req.url;
  match({ routes, location}, (error, redirectLocation, renderProps) =>{
    if (error) {
    res.status(500).send(error.message)
  } else if (redirectLocation) {
    res.redirect(302, redirectLocation.pathname + redirectLocation.search)
  } else if (renderProps) {
    // You can also check renderProps.components or renderProps.routes for
    // your "not found" component or route respectively, and send a 404 as
    // below, if you're using a catch-all route.
    res.status(200).send(renderToString(<RouterContext {...renderProps} />))
  } else {
    res.status(404).send('Not found')
  }
  })
})

console.log(`Server is listening to port: ${port}`);
server.listen(port);
