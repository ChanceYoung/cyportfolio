import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import MainView from './views/MainView'
import ResumeView from './views/ResumeView'
import ProjectView from './views/ProjectView'
import LoginView from './views/LoginView'
import SecureView from './views/SecureView'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<MainView />} />
                <Route path="/aboutme" element={<ResumeView />} />
                <Route path="/projects/:id" element={<ProjectView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/secure" element={<SecureView />} />
            </Routes>
        </>
    )
}

export default App
