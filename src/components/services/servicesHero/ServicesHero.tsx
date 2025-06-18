import { useEffect } from "react";

// PROMPTS
import { servicesTexts } from "@/prompts";


export default function ServicesHero() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }, [])


    return (
        <div
            className="relative flex items-center justify-center rounded-lg shadow-md overflow-hidden"
            style={{
                backgroundImage: `url("https://cdn.dribbble.com/userupload/23744503/file/original-26b5feb7d161c73e61332417a74bf86c.gif")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className="relative z-10 flex flex-col items-center text-center text-white bg-white/10 backdrop-blur-lg rounded-md px-6 py-8 w-full h-full ">
                <h6 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 capitalize drop-shadow-md">
                    {servicesTexts.servicesTitle}
                </h6>
                <p className="text-sm md:text-base max-w-md">
                    {servicesTexts.servicesSubtitle}
                </p>

            </div>
        </div>

    )
}
