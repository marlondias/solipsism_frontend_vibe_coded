import { Routes, Route, Navigate } from 'react-router-dom'

// Placeholder components - will be moved to separate files later
const SignupPage = () => <div>Signup Page</div>
const LoginPage = () => <div>Login Page</div>
const HomePage = () => <div>Home Page</div>
const TrendingPage = () => <div>Trending Page</div>
const ProfilePage = () => <div>Profile Page</div>
const TagPage = () => <div>Tag Page</div>
const SettingsPage = () => <div>Settings Page</div>

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/trending" element={<TrendingPage />} />
      <Route path="/u/:username" element={<ProfilePage />} />
      <Route path="/t/:tag" element={<TagPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default App
