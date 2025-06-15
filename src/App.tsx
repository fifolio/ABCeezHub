import { BrowserRouter, Routes, Route } from "react-router-dom";

// SCREENS
import { ArticleScreen, HomeScreen } from "./screens";

// COMPONENTS
import { BottomNav, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 p-3 overflow-auto">
          <Routes>
            <Route index path="/" element={<HomeScreen />} />
            <Route path="/articles/:articleId" element={<ArticleScreen />} />

            {/* <Route path='*' element={<Error />} /> */}
          </Routes>
        </div>

        {/* BottomNav */}
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
