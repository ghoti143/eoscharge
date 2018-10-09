import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { configure } from 'mobx'
import { BrowserRouter } from 'react-router-dom'

configure({enforceActions: 'always'})

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("root"))