import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import ScrollToTop from './ScrollToTop'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ScrollToTop />
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)