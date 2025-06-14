import type { JSX } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import { useNavbar } from "@/stores/navbar/useNavbar"

type LeftLinks = {
  route: string;
  link: JSX.Element;
};

const { setLeft, setTitle } = useNavbar.getState();

export const leftLinks: LeftLinks[] = [
  {
    route: 'hub',
    link: (
      <Link
        to="/"
        className="text-md font-medium h-full p-6"
        style={{
          backgroundImage: "url('/assets/icons/MainLogo.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></Link>
    ),
  },
  {
    route: 'services',
    link: (
      <Link
        to="/"
        onClick={() => {
          setLeft('hub');
          setTitle('hub');
        }}
      >
        <ArrowLeft />
      </Link>
    ),
  },
  {
    route: 'portfolio',
    link: (
      <Link
        to="/"
        onClick={() => {
          setLeft('hub');
          setTitle('hub');
        }}
      >
        <ArrowLeft />
      </Link>
    ),
  },
    {
    route: 'about',
    link: (
      <Link
        to="/"
        onClick={() => {
          setLeft('hub');
          setTitle('hub');
        }}
      >
        <ArrowLeft />
      </Link>
    ),
  },
    {
    route: 'articles',
    link: (
      <Link
        to="/"
        onClick={() => {
          setLeft('hub');
          setTitle('hub');
        }}
      >
        <ArrowLeft />
      </Link>
    ),
  }
];
