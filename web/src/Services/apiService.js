import axios from 'axios'

export const sendEmailBody = async () => {}

export const getPosts = async () => {
    const posts = await axios.get('/api/posts')
    return posts.data
}

export const getPostbyId = async id => {
    const post = await axios.get('/api/posts', { params: { post_id: id } })

    return post.data
}

export const getProfileInfo = async (name, token) => {
    const response = await axios.get(`/api/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: { user: name },
    })
    if (response.status != 200) return null
    else return response.data
}
