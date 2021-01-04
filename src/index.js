import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import Provider from './services/Apollo'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Switch>
          <Route path='/' exact={true} component={App} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
