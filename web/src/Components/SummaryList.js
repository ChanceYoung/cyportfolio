const SummaryList = ({ listofposts }) => {
    const onPostClick = (id) => {
        console.log(id)
    }
    return (
        <>
            {listofposts.map((post) => (
                <div className="card w-50" key={post.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <h6 className="card-text">Skills: </h6>
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
