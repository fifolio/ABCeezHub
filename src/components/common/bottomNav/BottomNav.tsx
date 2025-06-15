import { Link } from "react-router";

// ICONS
import { BriefcaseBusiness, Building2, GalleryHorizontalEnd, House } from 'lucide-react';

// STORE 
import { useNavbar } from "@/stores/navbar/useNavbar";

export default function BottomNav() {

  const { title, setLeft, setTitle } = useNavbar();

  const links = [
    {
      route: '/',
      link: (
        <Link
          to="/"
          onClick={() => {
            setLeft('hub');
            setTitle('hub');
          }}
          className={`${title === 'hub' && '!font-extrabold text-blue-500'} flex flex-col items-center justify-center h-full w-[100px] space-y-2 font-medium`}>
          <House className={`w-5 h-5 ${title === 'hub' && 'fill-blue-500'}`} />
          <span className="text-sm">Hub</span>
        </Link>
      ),
    },
    {
      route: 'services',
      link: (
        <Link
          to="/services"
          onClick={() => {
            setLeft('services');
            setTitle('services');
          }}
          className={`${title === 'services' && '!font-extrabold text-blue-500'} flex flex-col items-center justify-center h-full w-[100px] space-y-2 font-medium`}>
          <BriefcaseBusiness className={`w-5 h-5 ${title === 'services' && 'fill-blue-500'}`} />
          <span className="text-sm">Services</span>
        </Link>
      ),
    },
    {
      route: 'portfolio',
      link: (
        <Link
          to="/portfolio"
          onClick={() => {
            setLeft('portfolio');
            setTitle('portfolio');
          }}
          className={`${title === 'portfolio' && '!font-extrabold text-blue-500'} flex flex-col items-center justify-center h-full w-[100px] space-y-2 font-medium`}>
          <GalleryHorizontalEnd className={`w-5 h-5 ${title === 'portfolio' && 'fill-blue-500'}`} />
          <span className="text-sm">Portfolio</span>
        </Link>

      ),
    },
    {
      route: 'about',
      link: (
        <Link
          to="/about"
          onClick={() => {
            setLeft('about');
            setTitle('about');
          }}
          className={`${title === 'about' && '!font-extrabold text-blue-500'} flex flex-col items-center justify-center h-full w-[100px] space-y-2 font-medium`}>
          <Building2 className={`w-5 h-5 ${title === 'about' && 'fill-blue-500'}`} />
          <span className="text-sm">About</span>
        </Link>
      ),
    }
  ];

  return (
    <div className="bg-white text-gray-600 border-t-1 h-20 flex items-center justify-between">
      {links.map((item) => (
        <div key={item.route}>{item.link}</div>
      ))}
    </div>
  )
}
