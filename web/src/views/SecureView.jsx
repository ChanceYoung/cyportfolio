import { verifySession, logoutUser } from '../Services/apiService'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { GoogleLogout } from 'react-google-login'

const SecureView = () => {
    const { state } = useLocation()
    const [userInfo, setUserInfo] = useState(null)
    const [token, setToken] = useState('')
    useEffect(() => {
        setUserInfo(state.user)
        setToken(state.token)
    }, [])

    const logoutHandler = async () => {
        const logoutResult = await logoutUser(token)
        if (logoutResult) {
            setUserInfo(null)
            setToken('')
        }
    }

    return userInfo === null ? (
        <div className="text-danger container">
            You are not Authorized to be on this page.
        </div>
    ) : (
        <div className="container">
            <div>Welcome, {userInfo.name}</div>
            <GoogleLogout
                clientId="147626009254-hot641jv249asacll1am10qn61np3t0b.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logoutHandler}
            />
        </div>
    )
}

export default SecureView
