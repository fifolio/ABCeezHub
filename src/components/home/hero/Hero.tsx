
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";
import { useSk_Hero } from "@/stores/skeletons/HomeScreen/sk_Hero";

// PROMPTS
import { heroTexts } from "@/prompts";

// APIs
import { GET_featuredArticle } from "@/backend/services/articles/GET_featuredArticle";

// SKELETONS
import { Skeleton_Hero } from "@/skeletons";

// INTERFACES
import type { Inter_Article } from "@/interfaces";


export default function Hero() {
    const { setLeft, setTitle } = useNavbar();
    const { sk_Hero, setSk_Hero } = useSk_Hero();

    const [article, setArticle] = useState<Inter_Article | null>(null);

    useEffect(() => {
        GET_featuredArticle()
            .then((res) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setArticle(res);
                setSk_Hero(false);
            })
            .catch((err) => {
                console.error("Error fetching featured article:", err);
            })
    }, []);


    if (sk_Hero || !article) return <Skeleton_Hero />;

    return (
        <div className="bg-white border shadow-sm rounded-lg px-2 py-5">
            <div className="mt-3 mb-6 text-center rounded-lg space-y-2">
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-500 to-blue-900 bg-clip-text text-transparent truncate">
                    {heroTexts.heroTitle}
                </h1>
                <p className="text-sm text-gray-700 italic">
                    {heroTexts.heroSubtitle}
                </p>
            </div>

            <Link
                to={`/articles/${article?.$id}`}
                onClick={() => {
                    setLeft("articles");
                    setTitle(`${article?.title}`);
                }}
            >
                <div
                    className="flex flex-col px-2 pb-2 justify-end h-[300px] rounded-lg text-white overflow-hidden"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${article?.coverURL})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="w-full px-3 py-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg">
                        <h1 className="text-lg font-extrabold truncate">
                            {article?.title}
                        </h1>
                        <p className="text-sm break-words">
                            {article?.hook}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}