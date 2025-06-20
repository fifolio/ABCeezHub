import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";
import { useSk_AllArticles } from "@/stores/skeletons/AllArticles/sk_AllArticles";

// SKELETONS
import { Skeleton_AllArticles } from "@/skeletons";

// APIs
import { GET_allArticles } from "@/backend/services/articles/GET_allArticles";

// INTERFACES
import type { Inter_Articles } from "@/interfaces";

export default function AllArticles() {
    const { setLeft, setTitle } = useNavbar();
    const { sk_AllArticles, setSk_AllArticles } = useSk_AllArticles();

    const [articles, setArticles] = useState<Inter_Articles[] | null>(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })

        GET_allArticles()
            .then((res) => {
                setArticles(res);
                setSk_AllArticles(false);
            })
            .catch((err) => {
                console.error("Error fetching articles:", err);
            })
    }, [])

    if (sk_AllArticles || !articles) return (<Skeleton_AllArticles />)

    return (
        <div className="mt-3 flex flex-col space-y-3">
            {articles.map((article: Inter_Articles, i: number) => (
                <Link
                    to={`/articles/${article.$id}`}
                    onClick={() => {
                        setLeft("articles");
                        setTitle(article.title);
                    }}
                    key={i}
                    className="flex flex-row items-start gap-4 bg-white rounded-md shadow-sm p-3 border-1"
                >
                    {/* COVER */}
                    <div
                        className="flex-shrink-0 w-[130px] h-[130px] rounded-lg bg-gray-200 shadow-sm"
                        style={{
                            backgroundImage: `url(${article.coverURL})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>

                    {/* TITLE + DESCRIPTION + DATE */}
                    <div className="flex flex-col justify-between flex-1 h-full space-y-2 overflow-hidden">
                        <h2 className="text-md font-bold mt-1 line-clamp-2">
                            {article.title}
                        </h2>
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {article.content}
                        </p>
                        <span className="text-xs text-gray-400 mt-auto">Published: {new Date(article.$createdAt).toLocaleDateString("en-US")}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
