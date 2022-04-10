import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ProfilePic = ({ user }) => {
    const { docs } = useFirestore(user)

    return (
        <div>
            {docs &&
                docs.map(doc => (
                    <div className="img-rounded" key={doc.id}>
                        <img src={doc.url} alt="profile picture here"></img>
                    </div>
                ))}
        </div>
    )
}

export default ProfilePic
