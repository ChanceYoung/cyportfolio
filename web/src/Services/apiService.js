import axios from 'axios'

export const sendEmailBody = async (email_info) => {
    const email = await axios.post('/api/email', { ...email_info })
    return email.data
}

export const getPosts = async () => {
    console.log('hit getPosts')
    const posts = await axios.get('/api/posts')
    const tags = await axios.get('/api/tags')

    const filteredposts = posts.data.map((post) => {
        const filteredskills = tags.data.filter(
            (tag) => tag.post_id === post.id
        )
        const skills = filteredskills.map((skill) => skill.skill_name)
        return {
            id: post.id,
            title: post.title,
            skills,
            goal: post.goal,
        }
    })
    return filteredposts
}

export const getPostbyId = async (id) => {
    const posts = await axios.get('/api/posts')
    const tags = await axios.get('/api/tags')

    const filteredpost = posts.data.filter((post) => post.id === id)
    const post = filteredpost.map((post) => {
        const filteredskills = tags.data.filter(
            (tag) => tag.post_id === post.id
        )
        const skills = filteredskills.map((skill) => skill.skill_name)
        return {
            id,
            title: post.title,
            skills,
            goal: post.goal,
            full: post.full_body,
        }
    })
    return post[0]
}
