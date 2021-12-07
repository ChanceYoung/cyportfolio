import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import MainView from './views/MainView'
import ResumeView from './views/ResumeView'
import ProjectView from './views/ProjectView'

function App() {


    return (
        <>
            <Navbar />
            <Routes>
            <Route exact path='/' element={<MainView/>}/>
            <Route path='/aboutme' element={<ResumeView/>}/>
            <Route path='/projects/:id' element={<ProjectView/>}/>
            </Routes>
        </>
    )
}

export default App
