import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)
