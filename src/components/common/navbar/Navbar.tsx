import { Link } from "react-router-dom"

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar"

// NAVBAR LINKS
import { leftLinks } from "./links/left/leftLinks";
import { rightLinks } from "./links/right/rightLinks";


export default function Navbar() {

  const { left, title, isLoggedIn, displayNavbar} = useNavbar();

  if (!displayNavbar) return null;

  const renderLeftLink = () => {
    const link = leftLinks.find(link => link.route === left);
    return link && link.link;
  };

  const renderRightLink = () => {
    const link = rightLinks.find(link => link.isLoggedIn === isLoggedIn);
    return link && link.link;
  };

  return (
    <nav className="relative bg-white shadow-lg h-20 px-3 flex items-center justify-between">
      <div className="flex w-full h-full items-center justify-between">

        <div className="space-x-4 flex items-center">
          {/* Left */}
          {renderLeftLink()}

          {/* Title */}
          <Link to="/" className="text-xl font-extrabold capitalize">
            {title}
          </Link>
        </div>

        {/* Right */}
        {renderRightLink()}
      </div>
    </nav>

  )
}
