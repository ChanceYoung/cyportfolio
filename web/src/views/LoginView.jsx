import React from 'react'
// import LoginForm from '../Inputs/LoginForm'
import GoogleLogin from 'react-google-login'
import { onUserLogin } from '../Services/apiService'
import { Navigate } from 'react-router'

const LoginView = () => {
    const handleLogin = async googleData => {
        console.log(googleData)
        console.log(googleData.tokenId)
        const user = await onUserLogin(googleData)
        return <Navigate to={{ pathname: '/secure', state: { user: user } }} />
    }

    return (
        <div className="container">
            <div className="row">
                <GoogleLogin
                    clientId="147626009254-hot641jv249asacll1am10qn61np3t0b.apps.googleusercontent.com"
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
