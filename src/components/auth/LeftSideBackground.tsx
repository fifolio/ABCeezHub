import { auth1, auth2, auth3, auth4, auth5, auth6, auth7, auth8, auth9, auth10 } from "@/assets/pages/auth";
import { useMemo } from "react";

export default function LeftSideBackground() {
    const images = [auth1, auth2, auth3, auth4, auth5, auth6, auth7, auth8, auth9, auth10];

    const selectedImage = useMemo(() => {
        return images[Math.floor(Math.random() * images.length)];
    }, []); // Only run once on mount

    return (
        <img src={selectedImage} alt="Background" className="absolute inset-0 w-full h-full object-cover shadow-md" />
    );
}