class Comment {
    constructor(author, content, datemade, id = null) {
        this.author = author
        this.content = content
        this.datecreated = datemade
        this.id = id
        Object.freeze(this)
    }
}
Object.freeze(Comment.prototype)
export default Comment
