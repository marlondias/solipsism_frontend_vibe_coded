import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

export default function App() {
  const isAuthenticated = true //mock

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isAuthenticated && (
            <>
              <Route path="/home" element={<div>Home</div>} />
            </>
          )}

          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/home" replace /> : <div>Login</div>
            }
          />

          <Route
            path="*"
            element={
              <Navigate to={isAuthenticated ? '/home' : '/login'} replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
