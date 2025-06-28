import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

// SERVICES
import { checkSession } from "./backend/services/auth/checkSession";

// STORES
import { useUserState } from "./stores";

// PAGES
import { AddArticle, AuthPage, ErrorPage, GuestResetPasswordPage, SplashPage } from "./pages";

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
          <Route path="/" element={isLoggedin ? <DashboardLayout children={<p className="mt-[200px] text-yellow-700 border border-yellow-400 bg-yellow-100 w-[600px] p-6 rounded-lg mx-auto">Development of this project has been permanently discontinued, some functions will not work properly.</p>
          } /> : <AuthPage />} />
          <Route path="/reset" element={isLoggedin ? <Navigate to="/" replace /> : <GuestResetPasswordPage />} />
          <Route path="/article" element={isLoggedin ? <DashboardLayout children={<AddArticle />} /> : <Navigate to="/" replace />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
