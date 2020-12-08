import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <script src="./../scripts/navbar.js"></script>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)