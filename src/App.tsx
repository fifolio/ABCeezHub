import { BrowserRouter, Routes, Route } from "react-router-dom";

// SCREENS
import { ArticleScreen, HomeScreen, PortfolioScreen, ServicesScreen, SignleArticleScreen, SignleProductScreen } from "./screens";

// COMPONENTS
import { BottomNav, Dialog, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">

        {/* Dynamic Dialog */}
        <Dialog />

        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 p-3 overflow-auto">
          <Routes>
            <Route index path="/" element={<HomeScreen />} />
            <Route path="/articles" element={<ArticleScreen />} />
            <Route path="/articles/:articleId" element={<SignleArticleScreen />} />
            <Route path="/portfolio" element={<PortfolioScreen />} />
            <Route path="/portfolio/:productId" element={<SignleProductScreen />} />
            <Route path="/services" element={<ServicesScreen />} />

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
