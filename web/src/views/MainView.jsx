import ContactForm from '../Components/ContactForm'
import SummaryList from '../Components/SummaryList'
import { getPosts } from '../Services/apiService'

import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import TypeWriterEffect from 'react-typewriter-effect'

const MainView = () => {
    const [postIds, setPostIds] = useState([])

    return (
        <div className="container">
            <div className="row m-2">
                <TypeWriterEffect
                    textStyle={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '50%',
                    }}
                    cursorColor="white"
                    startDelay={40}
                    multiText={['Welcome!', 'Chance Young Web Development']}
                    multiTextDelay={5000}
                    typeSpeed={100}
                    hideCursorAfterText={true}
                />
            </div>
            <div className="row text-center">
                <h1 className="p-2 border-bottom text-info">My Projects</h1>
            </div>
            <div className="row justify-content-center">
                <ul className="nav nav-pills text-center w-50 ">
                    <li className="nav-item m-2">
                        <NavLink
                            className="nav-link text-info text-decoration-none"
                            to="/projects/TheBuilderPattern"
                        >
                            The Builder Pattern
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink
                            className="nav-link text-info text-decoration-none"
                            to="/projects/TestingWithJest"
                        >
                            Testing With Jesting
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink
                            className="nav-link text-info text-decoration-none"
                            to="/projects/SocketIO"
                        >
                            Socket.IO
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink
                            className="nav-link text-info text-decoration-none"
                            to="/projects/AutomatedDatabaseBackup"
                        >
                            Automated Database Backup
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink
                            className="nav-link text-info text-decoration-none"
                            to="/projects/QuillJS"
                        >
                            Quill.js Implementation
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink
                            className="nav-link text-info text-decoration-none"
                            to="/projects/SimpleGithubActions"
                        >
                            Simple Github Actions
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink
                            className="nav-link text-info text-decoration-none"
                            to="/projects/ProjectBakersman"
                        >
                            Capstone Project: Project Bakersman
                        </NavLink>
                    </li>
                </ul>
                {/* <SummaryList listofposts={posts} /> */}
            </div>
        </div>
    )
}

export default MainView
