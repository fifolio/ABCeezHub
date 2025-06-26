import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

// SERVICES
import { checkSession } from "./backend/services/auth/checkSession";

// STORES
import { useUserState } from "./stores";

// PAGES
import { AuthPage, ErrorPage, GuestResetPasswordPage, SplashPage } from "./pages";

// LAYOUTS
import { DashboardLayout } from "./layouts";

export default function App() {

  const { isLoggedin, setIsLoggedin } = useUserState();

  // Check if there's an active session
  useEffect(() => {
    async function sessionCheck() {
      try {
        const response = await checkSession();
        setIsLoggedin(response);
      } catch (error) {
        console.error("Error checking session:", error);
        setIsLoggedin(false);
      }
    }

    sessionCheck();
  }, [setIsLoggedin]);

  if (isLoggedin === undefined) {
    return <SplashPage />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>

          <Route path="/" element={isLoggedin ? <DashboardLayout children={null} /> : <AuthPage />} />

          <Route
            path="/reset"
            element={
              isLoggedin ? <Navigate to="/" replace /> : <GuestResetPasswordPage />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
