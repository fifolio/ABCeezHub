import { Link } from "react-router";

// PROMPTS
import { ctaAboutTexts } from "@/prompts";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";


export default function CtaAbout() {

    const { setLeft, setTitle } = useNavbar();

    return (
        <div
            className="relative flex items-center justify-center h-[300px] rounded-2xl shadow-xl overflow-hidden border border-white/20"
            style={{
                backgroundImage: `url("https://images.ctfassets.net/hrltx12pl8hq/1TygllzQIoWakVyXcqqG3l/8933393059eb72767cb2a7a120e1a882/hero_image.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            {/* Radial overlay for elegant effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-white/5 to-transparent z-0" />

            <div className="relative z-10 flex flex-col items-center text-center text-white bg-white/10 backdrop-blur-md rounded-xl px-6 py-8 max-w-[90%] shadow-lg">
                <h6 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 capitalize drop-shadow-md">
                    {ctaAboutTexts.ctaAboutTitle}
                </h6>
                <p className="text-sm md:text-base text-white/90 max-w-md">
                    {ctaAboutTexts.ctaAboutSubtitle}
                </p>

                <Link
                    to="/About"
                    onClick={() => {
                        setLeft("about")
                        setTitle("about")
                    }}
                    className="mt-6 inline-block px-10 py-3 text-md md:text-base font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
                >
                    Meet Us
                </Link>
            </div>
        </div>

    )
}
