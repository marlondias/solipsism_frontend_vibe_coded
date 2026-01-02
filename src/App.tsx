import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Trending from './pages/Trending'
import UserProfile from './pages/UserProfile'
import HashtagDetails from './pages/HashtagDetails'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <>
      <div>
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          Toggle Auth: {isAuthenticated.toString()}
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/u/:username" element={<UserProfile />} />
              <Route path="/h/:hashtag" element={<HashtagDetails />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}
