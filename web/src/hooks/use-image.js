import { useState, useEffect } from 'react'
import axios from 'axios'

const useImage = key => {
    const [src, setSrc] = useState()

    useEffect(() => {
        async function getImageFromDb() {
            const result = await axios.get('/getimage')
        }
    }, [key])

    const changeHandler = async e => {
        if (
            e.target.files &&
            e.target.files[0] &&
            e.target.files[0].type.split('/')[0] == 'image'
        ) {
            if (e.target.files[0].name.split('.').length > 2) return
            const data = new FormData()
            data.append('file', e.target.files[0])
            const result = await axios.post()

            setSrc()
        }
    }
    return {
        changeHandler,
        src,
    }
}
export default useImage
