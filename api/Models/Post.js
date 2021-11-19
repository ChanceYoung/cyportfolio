const { v4: uuidv4 } = require('uuid')

function Post(title, skills, summary, full) {
    this.id = uuidv4()
    this.title = title || ''
    this.skills = skills || ''
    this.summary = summary || ''
    this.full = full || ''
}

module.exports = Post
