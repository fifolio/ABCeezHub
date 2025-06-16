import { Link } from "react-router";

// PROMPTS
import { ctaServicesTexts } from "@/prompts";
import { useNavbar } from "@/stores/navbar/useNavbar";


export default function CtaServices() {

    const { setLeft, setTitle } = useNavbar();

    return (
        <div
            className="relative flex flex-col h-[300px] border shadow-sm rounded-lg overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://cdn.dribbble.com/userupload/18802755/file/original-6889cdceaa8c57a6ae3b853bafbe69a9.png?resize=400x0")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col items-center justify-center w-full h-full text-white bg-white/10 backdrop-blur-xs rounded-lg p-4">
                <div className="flex flex-row items-center justify-between mb-5">
                    <h6 className="text-4xl font-extrabold capitalize">
                        {ctaServicesTexts.ctaServicesTitle}
                    </h6>
                </div>
                <p className="text-sm text-center">
                    {ctaServicesTexts.ctaServicesSubtitle}
                </p>
                <div className="mt-10 flex items-center justify-between">
                    <Link
                        to='/services'
                        className="font-extrabold bg-white text-blue-800 py-3 px-6 rounded-lg shadow-md text-md"
                        onClick={() => {
                            setLeft('services')
                            setTitle('services')
                        }}
                    >
                        Discover Services
                    </Link>
                </div>
            </div>
        </div>

    )
}
