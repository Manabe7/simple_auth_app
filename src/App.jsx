import { useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import UserProfile from './UserProfile'
import NotFound from './NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [users, setUsers] = useState([]);

  /* useEffect(() => {
    
  }, []) */
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home users={users} setUsers={setUsers}/>
            } />
          <Route path='UserProfile' element={<UserProfile users={users} setUsers={setUsers}/>}/>
          <Route path='*' element={<NotFound/>}/>
          
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
