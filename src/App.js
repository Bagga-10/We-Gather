import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from "./components/Carousel";
import './App.css';
import NotesPage from './pages/Notespage';


// Lazy Loading Pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const MessagingPage = lazy(() => import('./pages/MessagingPage'));

// Paths where Navbar is hidden
const HIDE_NAVBAR_PATHS = ['/login', '/register'];

// Layout Component
function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Conditional Navbar */}
      {!HIDE_NAVBAR_PATHS.includes(location.pathname) && <Navbar />}

      {/* Routes */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/academic-updates" element={<h1>Academic Updates Page</h1>} />
          <Route path="/events" element={<h1>Events Page</h1>} />
          <Route path="/announcements" element={<h1>Announcements Page</h1>} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Fallback Route */}
        </Routes>
      </Suspense>
    </>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
