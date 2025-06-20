import { useEffect, useState } from "react";
import { Link } from "react-router"

// UI COMPONENTS
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";
import { useSk_AllArticles } from "@/stores/skeletons/AllArticles/sk_AllArticles";

// APIs
import { GET_allArticles } from "@/backend/services/articles/GET_allArticles";

// INTERFACES
import type { Inter_Articles } from "@/interfaces";


export default function AllArticles() {

    const { setLeft, setTitle } = useNavbar();
    const { setSk_AllArticles } = useSk_AllArticles();

    const [articles, setArticles] = useState<Inter_Articles[] | null>(null);

    useEffect(() => {
        GET_allArticles()
            .then((res) => {
                setArticles(res);
                setSk_AllArticles(false);
            })
            .catch((err) => {
                console.error("Error fetching featured article:", err);
            })
    }, []);

    return (
        <ScrollArea className="w-full whitespace-nowrap mt-2 pt-2 bg-white">
            <div className="flex flex-row space-x-4 overflow-auto">
                {articles?.map((article, i) => {
                    if (i < 5) {
                        return (
                            <Link
                                key={article.$id}
                                to={`/articles/${article.$id}`}
                                onClick={() => {
                                    setLeft('articles');
                                    setTitle(article.title);
                                }}
                                className="w-[200px] flex-shrink-0">
                                <div className="border-1 rounded-lg overflow-hidden">
                                    <img
                                        src={article.coverURL}
                                        alt="articleCover"
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="p-2">
                                        <h6 className="text-md font-bold truncate">{article.title}</h6>
                                        <p className="text-sm text-gray-600 truncate">
                                            {article.content || "No description available."}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>

    )
}