import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const ProfilePicture = ({ key }) => {
    const [imagekey, setImagekey] = useState(key)

    const imageInput = async e => {
        if (
            e.target.files &&
            e.target.files[0] &&
            e.target.files[0].type.split('/')[0] == 'image'
        ) {
            if (e.target.files[0].name.split('.').length > 2) return
            const data = new FormData()
            data.append('file', e.target.files[0])
            const result = await axios.post('/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            setImagekey(result.data.filename)
            e.target.value = ''
        }
    }
    return (
        <>
            {typeof image != 'undefined' && (
                <img
                    src={`https://chanceyoung.dev/api/secure/upload/${imagekey}`}
                    alt="profile picture"
                />
            )}
            <input type="file" onChange={imageInput} />
        </>
    )
}

export default ProfilePicture
