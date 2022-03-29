import React from 'react'
// import LoginForm from '../Inputs/LoginForm'
import GoogleLogin from 'react-google-login'
import { onUserLogin } from '../Services/apiService'
import { Navigate } from 'react-router'

const LoginView = () => {
    const handleLogin = async googleData => {
        const user = await onUserLogin(googleData)
        return <Navigate to={{ pathname: '/secure', state: { user: user } }} />
    }
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
    return (
        <div className="container">
            <div className="row">
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
                {/* <LoginForm /> */}
            </div>
        </div>
    )
}

export default LoginView
