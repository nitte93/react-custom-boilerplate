import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './index.js'
import Home from './index.js'
import About from './index.js'
import Features from './index.js'

export default(
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='features' component={Features} />
    </Route>
);
