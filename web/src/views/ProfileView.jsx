import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getProfileInfo } from '../Services/apiService'
import ProfilePicture from '../Components/ProfilePicture'

const ProfileView = () => {
    const [userInfo, setUserInfo] = useState(null)
    const auth = useAuth0()

    useEffect(() => {
        async function getUser() {
            const token = await auth.getAccessTokenSilently()
            const results = await getProfileInfo(auth.user.name, token)
            setUserInfo(auth.user)
        }
        getUser()
        setUserInfo(auth.user)
    }, [])

    return auth.isAuthenticated && userInfo ? (
        <div className="container">
            <ProfilePicture key={userInfo.imageKey} />
            <div>Welcome, {userInfo.name}</div>
        </div>
    ) : (
        <></>
    )
}

export default ProfileView
