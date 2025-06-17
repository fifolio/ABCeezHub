// PROMPTS
import { portfolioTexts } from "@/prompts";


export default function PortfolioHero() {

    return (
        <div
            className="relative flex items-center justify-center rounded-2xl shadow-md overflow-hidden border border-white/20"
            style={{
                backgroundImage: `url("https://cdn.dribbble.com/userupload/25648123/file/original-93585fc46968db6b3d462e490a26a1e5.gif")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className="relative z-10 flex flex-col items-center text-center text-black bg-white/10 backdrop-blur-lg rounded-xl px-6 py-8 w-full h-full ">
                <h6 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 capitalize drop-shadow-md">
                    {portfolioTexts.portfolioTitle}
                </h6>
                <p className="text-sm md:text-base text-black max-w-md">
                    {portfolioTexts.portfolioSubtitle}
                </p>

            </div>
        </div>

    )
}
