import ContactForm from './Components/ContactForm'
import SummaryList from './Components/SummaryList'
import { getPosts } from './Services/apiService'

import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'

function App() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getPostsAsync() {
            const posts = await getPosts()
            setPosts(posts)
        }
        getPostsAsync()
    }, [])

    return (
        <>
            <Navbar />
            <div className="App container">
                <div className="row justify-content-center">
                    <ContactForm />
                </div>
                <div className="row justify-content-center">
                    <SummaryList listofposts={posts} />
                </div>
            </div>
        </>
    )
}

export default App
