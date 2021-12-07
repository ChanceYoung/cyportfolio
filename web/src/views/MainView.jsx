import ContactForm from '../Components/ContactForm'
import SummaryList from '../Components/SummaryList'
import { getPosts } from '../Services/apiService'

import { useState, useEffect } from 'react'

const MainView = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getPostsAsync() {
            const posts = await getPosts()
            setPosts(posts)
        }
        getPostsAsync()
    }, [])

    return (
        <div className="container">
            <div className='row text-center'>
            <h1 className='p-2 border-bottom'>My Favorite Projects</h1>
            </div>
        <div className="row justify-content-center">
            <SummaryList listofposts={posts} />
        </div>
        <div className='row justify-content-center'>
        <ContactForm />
        </div>

    </div>
    )
}

export default MainView
