import { verifySession } from '../Services/apiService'
import { useEffect, useState } from 'react'

const SecureView = () => {
    const [verifiedResult, setverifiedResult] = useState(null)
    useEffect(() => {
        async function verifySessionAsync() {
            const results = await verifySession()
            console.log(results)
            setverifiedResult(results)
        }
        verifySessionAsync()
    }, [])

    return verifiedResult === null ? (
        <div className="text-danger">
            You are not Authorized to be on this page.
        </div>
    ) : (
        <div>Welcome, {verifiedResult}</div>
    )
}

export default SecureView
