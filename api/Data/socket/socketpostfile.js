const fs = require('fs')
const path = require('path')
const Post = require('../../Models/Post')

const summary = fs.readFileSync(
    path.resolve(__dirname, 'socketsummary.md'),
    'utf8'
)
const full = fs.readFileSync(path.resolve(__dirname, 'socketfull.md'), 'utf8')

const socketPost = new Post(
    'Simple Chat Application with Socket.io',
    'Javascript, Socket.io, React, Nodejs',
    summary,
    full
)

module.exports = socketPost
