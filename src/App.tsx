import { BrowserRouter, Routes, Route } from "react-router";

// PAGES
import { AuthPage, DashboardPage, ErrorPage } from "./pages";

export default function App() {

  const userLoggedIn = false; // Simulating user login state

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route index path="/" element={userLoggedIn ? <DashboardPage /> : <AuthPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}