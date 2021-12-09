import { useParams } from "react-router"
import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import { getPostbyId } from "../Services/apiService"

const ProjectView = () => {
    const {id} = useParams()
    const [post, setPost] = useState({full: ''})

    useEffect(() => {
        async function getPostbyIdAsync() {
            const posts = await getPostbyId(id)
            setPost(posts)
        }
        getPostbyIdAsync()
    }, [id])
    return (
        <div className='container bg-secondary rounded'>
            <div className='row text-center text-white'>
                <h1>{post.title}</h1>
            </div>
            <div className='row text-white'>
                <ReactMarkdown>{post.goal}</ReactMarkdown>
            </div>
            <div className='row text-white'>
            <ReactMarkdown>{post.full}</ReactMarkdown>
            </div>
        </div>
    )
}

export default ProjectView
