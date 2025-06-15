import { Link } from "react-router";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

// PROMPTS
import { heroTexts } from "@/prompts";

export default function Hero() {

    const { setLeft, setTitle } = useNavbar();

    return (
        <div className="bg-white border-1 shadow-sm rounded-lg px-2 py-5">
            <div className="mt-3 mb-6 text-center rounded-lg space-y-2">
                <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-500 to-red-500 bg-clip-text text-transparent truncate">{heroTexts.heroTitle}</h1>
                <p className="text-sm text-gray-700 italic">{heroTexts.heroSubtitle}</p>
            </div>
            <Link
                to="/article/1"
                onClick={() => {
                    setLeft('articles');
                    setTitle('article 1');
                }}>
                <div
                    className="flex flex-col px-2 pb-2 justify-end h-[300px] rounded-lg text-white"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.axios.com/hFaF3pJnLb8SmIUFZlMHGZjqksU=/293x0:3786x2620/768x576/2025/06/06/1749183700593.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <div
                        className="w-full px-2 py-2 space-y-1 rounded-lg"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
                        }}
                    >
                        <h1 className="text-lg font-extrabold truncate">Article Title</h1>
                        <p className="text-sm break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque quidem veritatis vitae temporibus nostrum voluptates expedita quisquam delectus natus.</p>
                    </div>
                </div>
            </Link >
        </div>
    )
}
