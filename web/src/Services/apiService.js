import axios from 'axios'

export const sendEmailBody = async () => {}

export const getPosts = async () => {
    const posts = await axios.get('/api/posts')
    return posts.data
}

export const getPostbyId = async (id) => {
    const post = await axios.get('/api/posts', { params: { post_id: id } })

    return post.data
}

export const onUserLogin = async (logininfo) => {
    const loginResult = await axios.post('/api/login', { ...logininfo })
    return loginResult.status === 200
}

export const verifySession = async () => {
    const verifiedResult = await axios.get('/api/secure', {
        withCredentials: true,
    })
    console.log(verifiedResult)
    if (verifiedResult.status === 200) return verifiedResult.data
    else return null
}
