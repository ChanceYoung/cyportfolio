import { verifySession, logoutUser } from '../Services/apiService'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const SecureView = () => {
    const { state } = useLocation()
    const [verifiedResult, setverifiedResult] = useState(null)
    useEffect(() => {
        console.log(state)
    }, [])

    const logoutHandler = async () => {
        const logoutResult = await logoutUser()
        if (logoutResult) {
            setverifiedResult(null)
        }
    }

    return verifiedResult === null ? (
        <div className="text-danger container">
            You are not Authorized to be on this page.
        </div>
    ) : (
        <div className="container">
            <div>Welcome, {verifiedResult}</div>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default SecureView
