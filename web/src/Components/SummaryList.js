import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const SummaryList = ({ listofposts }) => {
    const navigate = useNavigate()

    const onPostClick = id => {
        navigate(`/projects/${id}`)
    }
    return (
        <>
            {listofposts.map(post => (
                <div className="card w-50 col p-1" key={post.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <ReactMarkdown>{post.goal}</ReactMarkdown>
                        <h6 className="card-text">
                            Skills:
                            {post.skills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </h6>
                        <button
                            onClick={() => onPostClick(post.id)}
                            className="btn btn-secondary"
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SummaryList
