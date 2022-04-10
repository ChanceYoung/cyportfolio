import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getProfileInfo } from '../Services/apiService'

const ProfileView = () => {
    const [userInfo, setUserInfo] = useState(null)
    const auth = useAuth0()

    useEffect(() => {
        // async function getUser() {
        //     const token = await auth.getAccessTokenSilently()
        //     console.log(token)
        //     const results = await getProfileInfo(auth.user.name, token)
        //     // console.log(results)
        //     setUserInfo(auth.user)
        // }
        // getUser()
        setUserInfo(auth.user)
    }, [])

    return auth.isAuthenticated ? (
        <div className="container">
            <div>Welcome, {userInfo.name}</div>
        </div>
    ) : (
        <></>
    )
}

export default ProfileView
