const SummaryList = ({ listofposts }) => {
    return (
        <>
            {listofposts.map((post) => (
                <div className="card w-50" key={post.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <h6 className="card-text">Skills: {post.skills}</h6>
                        <button className="btn btn-secondary">View</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SummaryList
