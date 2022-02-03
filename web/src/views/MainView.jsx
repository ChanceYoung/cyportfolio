import ContactForm from '../Components/ContactForm'
import SummaryList from '../Components/SummaryList'
import { getPosts } from '../Services/apiService'

import { useState, useEffect, useRef } from 'react'

const MainView = () => {
    const [posts, setPosts] = useState([])
    // const typing = useRef(null)

    useEffect(() => {
        async function getPostsAsync() {
            const posts = await getPosts()
            setPosts(posts)
        }
        getPostsAsync()
        // typeWriter()
    }, [])

    // var i = 0
    // var txt = 'Chance Young Web Development' /* The text */
    // var speed = 50 /* The speed/duration of the effect in milliseconds */

    // function typeWriter() {
    //     if (i < txt.length) {
    //         typing.current.innerHTML += txt.charAt(i)
    //         i++
    //         setTimeout(typeWriter, speed)
    //     }
    // }

    return (
        <div className="container">
            <div className="row text-center">
                <h1 className="p-2 border-bottom">My Projects</h1>
            </div>
            <div className="row justify-content-center">
                <SummaryList listofposts={posts} />
            </div>
            <div className="row justify-content-center">
                <ContactForm />
            </div>
        </div>
    )
}

export default MainView
