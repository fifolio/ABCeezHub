import { useDialog } from "@/stores/dialog/useDialog";
import type { JSX } from "react";
import { Link } from "react-router-dom";

type rightLinks = {
    isLoggedIn: boolean;
    link: JSX.Element;
};

const { setDialogDisplay, setDialogTitle, setDialogSubtitle, setDialogDescription, setDialogCloseText, setDialogAddImg, setDialogImgUrl } = useDialog.getState();

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
                to="#"
                onClick={() => {
                    setDialogImgUrl('https://cdn-icons-gif.flaticon.com/10246/10246777.gif')
                    setDialogTitle('Coming Soon')
                    setDialogSubtitle('Something powerful is on the way')
                    setDialogDescription("This feature, and more will be available through ABCeez Hub v2. Stay tuned, the next version is just around the corner!")
                    setDialogCloseText('Got it')
                    setDialogAddImg(true)
                    setDialogDisplay(true)
                }}
                className="text-md shadow-md font-medium text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2">
                Access
            </Link>
        ),
    }
];
