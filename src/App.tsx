import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import { HomeScreen } from "./screens";

// COMPONENTS
import { Footer, Navbar } from "./components";

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
            {/* <Route path='*' element={<Error />} /> */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
