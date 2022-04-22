import DbDate from '../primatives/dbdate.js'
import DbId from '../primatives/dbid.js'
import Author from '../primatives/author.js'
import Content from '../primatives/content.js'
import Comment from '../templates/comment.js'

class CommentBuilder {
    addId(proposed_id) {
        this.id = new DbId(proposed_id).value
        return this
    }
    addAuthor(proposed_author) {
        this.author = new Author(proposed_author).value
        return this
    }
    addContent(proposed_content) {
        this.content = new Content(proposed_content).value
        return this
    }
    addDate(proposed_date = new Date.toISOString().split('T')[0]) {
        this.date = new DbDate(proposed_date).value
        return this
    }
    finalize() {
        this.#mustBeDefined('Date', this.date)
        this.#mustBeDefined('Author', this.author)
        this.#mustBeDefined('Content', this.content)
        return new Comment(this.author, this.content, this.date, this.id)
    }
    #mustBeDefined(label, value) {
        if (typeof value === 'undefined') {
            throw `Could not build Comment. Value ${label} is undefined. `
        }
    }
}
export default CommentBuilder
