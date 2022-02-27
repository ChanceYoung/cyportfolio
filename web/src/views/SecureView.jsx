import { verifySession, logoutUser } from '../Services/apiService'
import { useEffect, useState } from 'react'

const SecureView = () => {
    const [verifiedResult, setverifiedResult] = useState(null)
    useEffect(() => {
        async function verifySessionAsync() {
            const results = await verifySession()
            setverifiedResult(results.username)
        }
        verifySessionAsync()
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
            <button onClick={() => logoutHandler()}>Logout</button>
        </div>
    )
}

export default SecureView
