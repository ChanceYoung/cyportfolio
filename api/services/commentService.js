import pool from '../configs/poolConfig'
import CommentBuilder from '../models/builders/commentBuilder.js'

const makeComment = async commentInfo => {
    commentInfo = new CommentBuilder()
        .addAuthor(commentInfo.author)
        .addContent(commentInfo.content)
        .addDate()
        .finalize()
    const res = await pool.query(commentQueries.makeComment, [
        commentInfo.author,
        commentInfo.content,
        commentInfo.datecreated,
    ])
    return res.rows
}

const getComments = async () => {
    const res = await pool.query(commentQueries.getComments)
    const formattedComments = res.rows.map(comment =>
        new CommentBuilder()
            .addId(comment.comment_id)
            .addAuthor(comment.username)
            .addContent(comment.content)
            .addDate(comment.created)
            .finalize()
    )
    return formattedComments
}

const commentService = { makeComment, getComments }
export default commentService
