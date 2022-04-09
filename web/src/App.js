import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import MainView from './views/MainView'
import ResumeView from './views/ResumeView'
import ProjectView from './views/ProjectView'
import ProfileView from './views/ProfileView'
import ProtectedRoute from './Components/Auth/protectedroute'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<MainView />} />
                <Route path="/aboutme" element={<ResumeView />} />
                <Route path="/projects/:id" element={<ProjectView />} />
                <Route
                    path="/profile"
                    element={<ProtectedRoute component={ProfileView} />}
                ></Route>
            </Routes>
        </>
    )
}

export default App
