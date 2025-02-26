import { Routes, Route, Navigate } from 'react-router-dom'
import { Router } from './router'
import Login from '../pages/Login'
import Profile from '../profile'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path='/*' element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter