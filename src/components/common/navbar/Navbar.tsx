import { useEffect } from "react";
import { useLocation } from "react-router";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar"

// NAVBAR LINKS
import { leftLinks } from "./links/left/leftLinks";
import { rightLinks } from "./links/right/rightLinks";


export default function Navbar() {

  const location = useLocation();
  const { left, title, setLeft, setTitle, isLoggedIn, displayNavbar } = useNavbar();

  const renderLeftLink = () => {
    const link = leftLinks.find(link => link.route === left);
    return link && link.link;
  };

  const renderRightLink = () => {
    const link = rightLinks.find(link => link.isLoggedIn === isLoggedIn);
    return link && link.link;
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setLeft('hub');
        setTitle('hub');
        renderLeftLink()
        renderRightLink()
        break
      case '/services':
        setLeft('services');
        setTitle('services');
        renderLeftLink()
        renderRightLink()
        break;
      case '/portfolio':
        setLeft('portfolio');
        setTitle('portfolio');
        renderLeftLink()
        renderRightLink()
        break;
      case '/about':
        setLeft('about');
        setTitle('about');
        renderLeftLink()
        renderRightLink()
        break;
      case '/articles':
        setLeft('articles');
        setTitle('articles');
        renderLeftLink()
        renderRightLink()
        break;

      default:
        break;
    }
  }, [location.pathname]);

  if (!displayNavbar) return null;

  return (
    <nav className="bg-white shadow-lg h-20 px-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex w-full h-full items-center justify-between">

        <div className="space-x-4 flex items-center">
          {/* Left */}
          {renderLeftLink()}

          {/* Title */}
          <p className="text-xl font-extrabold capitalize">
            {title}
          </p>
        </div>

        {/* Right */}
        {renderRightLink()}
      </div>
    </nav>

  )
}
