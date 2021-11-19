import axios from 'axios'

export const sendEmailBody = async (email_info) => {
    const email = await axios.post('/email', { ...email_info })
    return email.data
}

export const getPosts = async () => {
    const posts = await axios.get('/posts')
    return posts.data
}
