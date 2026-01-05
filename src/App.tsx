import { BrowserRouter, Navigate, Route, Routes, Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Trending from './pages/Trending';
import UserProfile from './pages/UserProfile';
import HashtagDetails from './pages/HashtagDetails';

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex h-screen w-full items-center justify-center">Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

function PublicRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex h-screen w-full items-center justify-center">Loading...</div>;
  }

  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/u/:username" element={<UserProfile />} />
        <Route path="/h/:hashtag" element={<HashtagDetails />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Route>

      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme" attribute="class" enableSystem={true}>
      <AuthProvider>
        <BrowserRouter>
          <div className="relative min-h-screen">
            <AppRoutes />
            <Toaster />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
