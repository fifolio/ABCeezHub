import { Link } from "react-router-dom";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";
import { useEffect } from "react";

export default function AllArticles() {
    const { setLeft, setTitle } = useNavbar();


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    },[])

    return (
        <div className="mt-3 flex flex-col space-y-3">
            {[...Array(10)].map((_, i) => (
                <Link
                    to={`/articles/${i}`}
                    onClick={() => {
                        setLeft("articles");
                        setTitle(`${i}`);
                    }}
                    key={i}
                    className="flex flex-row items-start gap-4 bg-white rounded-md shadow-sm p-3 border-1"
                >
                    {/* COVER */}
                    <div
                        className="flex-shrink-0 w-[130px] h-[130px] rounded-lg bg-gray-200 shadow-sm"
                        style={{
                            backgroundImage: `url('https://placehold.co/200')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>

                    {/* TITLE + DESCRIPTION + DATE */}
                    <div className="flex flex-col justify-between flex-1 h-full space-y-2 overflow-hidden">
                        <h2 className="text-md font-bold mt-1 line-clamp-2">
                            Title of article {i} — Lorem ipsum dolor sit amet consectetur.
                        </h2>
                        <p className="text-sm text-gray-600 line-clamp-2">
                            This is a short preview of the article content. It provides an
                            overview or teaser to invite the user to click and read more.
                        </p>
                        <span className="text-xs text-gray-400 mt-auto">Published: June 15, 2025</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
