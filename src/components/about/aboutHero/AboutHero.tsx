import { useEffect } from "react";

// PROMPTS
import { aboutTexts } from "@/prompts";


export default function AboutHero() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }, [])


    return (
        <>

            {/* OUR STORY */}
            <div
                className="relative flex items-center justify-center rounded-lg shadow-md overflow-hidden border border-white/20"
                style={{
                    backgroundImage: `url("https://img.freepik.com/free-photo/colorful-gradient-background-with-neon-led-light_53876-124191.jpg?semt=ais_hybrid&w=740")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>

                <div className="relative z-10 flex flex-col items-center text-center text-white bg-white/10 backdrop-blur-lg rounded-lg px-6 py-8 w-full h-full ">
                    <h6 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 capitalize drop-shadow-md">
                        {aboutTexts.ourStoryTitle}
                    </h6>
                    <p className="text-sm md:text-base text-white max-w-md">
                        {aboutTexts.ourStorySubtitle}
                    </p>

                </div>
            </div>

            {/* COVER: COMPANY BUILDING */}
            <div
                className="relative min-h-[335px] flex items-center justify-center rounded-lg shadow-md overflow-hidden border border-white/20"
                style={{
                    backgroundImage: `url("/assets/aboutScreen/ABCeezBuilding.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
            </div>

            {/* OUR MISSION */}
            <div
                className="relative flex items-center justify-center rounded-lg  overflow-hidden bg-white">

                <div className="relative z-10 flex flex-col items-center text-center text-white bg-white/10 backdrop-blur-lg rounded-lg px-6 py-8 w-full h-full">
                    <h6 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-3 capitalize drop-shadow-md">
                        {aboutTexts.ourMissionTitle}
                    </h6>
                    <p className="text-sm md:text-base max-w-md text-black">
                        {aboutTexts.ourMissionSubtitle}
                    </p>
                </div>
            </div>

            {/* COVER: COMPANY BUILDING (INSIDE) */}
            <div
                className="relative min-h-[335px] flex items-center justify-center rounded-lg shadow-md overflow-hidden border border-white/20"
                style={{
                    backgroundImage: `url("/assets/aboutScreen/ABCeezBuildingInside.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
            </div>

        </>

    )
}
