import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProjectView = () => {
    const { id } = useParams()
    const [post, setPost] = useState()

    useEffect(() => {
        async function getPostbyIdAsync() {
            const post = await axios(`/posts/${id}/${id}.html`)
            setPost(post)
        }
        getPostbyIdAsync()
    }, [id])

    return (
        <div className="container bg-secondary rounded">
            <div className="row text-center">
                {post && post.data && (
                    <div dangerouslySetInnerHTML={{ __html: post.data }}></div>
                )}
            </div>
        </div>
    )
}

export default ProjectView
