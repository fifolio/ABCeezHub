import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

// SERVICES
import { checkSession } from "./backend/services/auth/checkSession";

// STORES
import { useUserState } from "./stores";

// PAGES
import { AuthPage, DashboardPage, ErrorPage, ResetPasswordPage } from "./pages";

export default function App() {

  // Get the userState that tracks wether of User is Logged in or Not
  const { isLoggedin, setIsLoggedin } = useUserState();

  // Check if there's an active session by calling the checkSession() and check it's returns
  async function sessionCheck() {
    try {
      const response = await checkSession();
      setIsLoggedin(response);
    } catch (error) {
      console.error('Error checking session:', error);
      setIsLoggedin(false);
    }
  }

  useEffect(() => {
    sessionCheck()
  }, []);


  if (isLoggedin === undefined) return null;

    return (
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route index path="/" element={isLoggedin ? <DashboardPage /> : <AuthPage />} />
            <Route index path="reset" element={<ResetPasswordPage />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}