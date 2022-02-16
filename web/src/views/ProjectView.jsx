import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { getPostbyId } from '../Services/apiService'

const ProjectView = () => {
    const { id } = useParams()
    const [post, setPost] = useState({ Body: '' })

    useEffect(() => {
        async function getPostbyIdAsync() {
            const post = await getPostbyId(id)
            setPost(post)
        }
        getPostbyIdAsync()
    }, [id])

    return (
        <div className="container bg-secondary rounded">
            <div className="row text-center text-white">
                <h1>{post.Title}</h1>
            </div>
            <div className="row text-white">
                <ReactMarkdown>{post.Body}</ReactMarkdown>
            </div>
        </div>
    )
}

export default ProjectView
