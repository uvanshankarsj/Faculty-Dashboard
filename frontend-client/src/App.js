import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single /Single'
import New from './pages/new/New'
import './App.scss'
import Forgot from './pages/forgotpass/Forgot'
import Reset from './pages/resetpass/Reset'
import Calendar from './pages/calendar/Calendar'
import Paper from './pages/papers/Paper'
import Courses from './pages/courses/Courses'
import Timetable from './pages/timetable/Timetable'
import Registration from './pages/registration/Registration'
import Profile from './pages/profile/Profile'

const App = () => {
    return (
    <div className='app'> 
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path='/' element={<Login/>}/>
                    <Route index element={<Login/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='forgot' element={<Forgot/>}/>
                    <Route path='reset' element={<Reset/>}/>
                    <Route path='calendar' element={<Calendar/>}/>
                    <Route path='papers' element={<Paper/>}/>
                    <Route path='courses' element={<Courses/>}/>
                    <Route path='timetable' element={<Timetable/>}/>
                    <Route path='registration' element={<Registration/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='faculties'>
                        <Route index element={<List/>}/>
                        <Route path=':facultyId' element={<Single/>}/>
                        <Route path='new' element={<New/>}/> 
                    </Route> 
                    <Route path='faculty'>
                        <Route index element={<List/>}/>
                        <Route path=':FacultyId' element={<Single/>}/>
                        <Route path='new' element={<New/>}/> 
                    </Route> 
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App