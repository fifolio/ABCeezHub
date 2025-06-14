import type { JSX } from "react";
import { Link } from "react-router-dom";

type rightLinks = {
    isLoggedIn: boolean;
    link: JSX.Element;
};

export const rightLinks: rightLinks[] = [
    {
        isLoggedIn: true,
        link: (
            <Link
                to="/profile"
                className="text-md font-medium">

                Profile
            </Link>
        ),
    },
    {
        isLoggedIn: false,
        link: (
            <Link
                to="/access"
                className="text-md shadow-md font-medium text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2">
                Access
            </Link>
        ),
    }
];
