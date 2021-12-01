import axios from 'axios'

export const sendEmailBody = async (email_info) => {
    const email = await axios.post('/email', { ...email_info })
    return email.data
}

export const getPosts = async () => {
    const posts = await axios.get('/posts')
    const filteredposts = posts.data.map((post) => {
        return {
            id: post.id,
            title: post.title,
            goal: post.goal,
            full: post.full_body,
        }
    })
    return filteredposts
}
