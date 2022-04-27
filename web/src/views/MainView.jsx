import ContactForm from '../Components/ContactForm'
import SummaryList from '../Components/SummaryList'
import { getPosts } from '../Services/apiService'

import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const MainView = () => {
    const [postIds, setPostIds] = useState([])
    // const typing = useRef(null)

    return (
        <div className="container">
            <div className="row text-center">
                <h1 className="p-2 border-bottom">My Projects</h1>
            </div>
            <div className="row">
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link text-info text-decoration-none"
                            to="/projects/TheBuilderPattern"
                        >
                            The Builder Pattern
                        </NavLink>
                    </li>
                </ul>
                {/* <SummaryList listofposts={posts} /> */}
            </div>
        </div>
    )
}

export default MainView
