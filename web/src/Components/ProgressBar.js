import { useStorage } from '../hooks/useStorage'
import React, { useEffect } from 'react'
import Loading from './Loading'

const ProgressBar = ({ file, setFile, user }) => {
    const { url, progress } = useStorage(file, user)
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])
    return <div>{progress != 100 && <Loading />}</div>
}

export default ProgressBar
