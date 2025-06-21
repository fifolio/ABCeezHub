import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";
import { useSk_AllArticles } from "@/stores/skeletons/AllArticles/sk_AllArticles";
import { useSortBy } from "@/stores/filters/AllArticles/Tools/sortBy";
import { useSearch } from "@/stores/filters/AllArticles/Tools/search";

// SKELETONS
import { Skeleton_AllArticles } from "@/skeletons";

// APIs
import { GET_allArticles } from "@/backend/services/articles/GET_allArticles";

// TYPES
import type { Models } from "node_modules/appwrite/types/client";

export default function AllArticles() {
    const { setLeft, setTitle } = useNavbar();
    const { sk_AllArticles, setSk_AllArticles } = useSk_AllArticles();

    const [articles, setArticles] = useState<Models.Document[]>([]);

    const { sortBy } = useSortBy();
    const { searchTerm } = useSearch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })

        setSk_AllArticles(true)

        GET_allArticles(sortBy, searchTerm)
            .then((res) => {
                setArticles(res);
                setSk_AllArticles(false);
            })
            .catch((err) => {
                console.error("Error fetching articles:", err);
            })
            
    }, [sortBy, searchTerm])

    if (sk_AllArticles || articles.length < 0) return (<Skeleton_AllArticles />)

    return (
        <div className="mt-3 flex flex-col space-y-3">
            {articles.length > 0 ? articles.map((article, i: number) => (
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
                        <span className="text-xs text-gray-400 mt-auto">Published: {article.$createdAt.split("T")[0]}</span>
                    </div>
                </Link>
            )) : (
                <div className="flex items-center justify-center h-64">
                    <p className="text-gray-500 text-lg font-bold">No articles found.</p>
                </div>
            )}
        </div>
    );
}
