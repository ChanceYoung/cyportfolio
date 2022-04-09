import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Auth0ProviderWithHistory from './Components/Auth/auth0providerwithhistory'

ReactDOM.render(
    <Router>
        <Auth0ProviderWithHistory>
            <App />
        </Auth0ProviderWithHistory>
    </Router>,
    document.getElementById('root')
)
