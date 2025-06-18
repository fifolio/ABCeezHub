import { Link } from "react-router";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

// PROMPTS
import { heroTexts } from "@/prompts";

export default function Hero() {

    const { setLeft, setTitle } = useNavbar();

    return (
        <div className="bg-white border shadow-sm rounded-lg px-2 py-5">
            <div className="mt-3 mb-6 text-center rounded-lg space-y-2">
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-500 to-blue-900 bg-clip-text text-transparent truncate">
                    {heroTexts.heroTitle}
                </h1>
                <p className="text-sm text-gray-700 italic">{heroTexts.heroSubtitle}</p>
            </div>

            <Link
                to="/article/1"
                onClick={() => {
                    setLeft('articles');
                    setTitle('article 1');
                }}
            >
                <div
                    className="flex flex-col px-2 pb-2 justify-end h-[300px] rounded-lg text-white overflow-hidden"
                    style={{
                        backgroundImage:
                            'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.aljazeera.com/wp-content/uploads/2024/10/AFP__20241013__36JX82C__v1__Preview__SpacexWillTryToCatchItsGiantStarshipRocketMidAi-1728824295.jpg?resize=770%2C513&quality=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full px-3 py-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg">
                        <h1 className="text-lg font-extrabold truncate">Article Title</h1>
                        <p className="text-sm break-words">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque
                            quidem veritatis vitae..
                        </p>
                    </div>
                </div>
            </Link>
        </div>

    )
}
