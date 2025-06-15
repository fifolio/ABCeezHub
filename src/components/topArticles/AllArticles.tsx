import { Link } from "react-router"

// UI
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

export default function AllArticles() {

    const { setLeft, setTitle } = useNavbar();

    return (
        <ScrollArea className="w-full whitespace-nowrap mt-2 pt-2">
            <div className="flex flex-row space-x-4 overflow-auto shadow-md">
                {[...Array(5)].map((_, i) => (
                    <Link
                        key={i}
                        to={`/article/${i}`}
                        onClick={() => {
                            setLeft('articles');
                            setTitle(`Article ${i}`);
                        }}
                        className="w-[200px] flex-shrink-0">
                        <div className="border shadow-md rounded-lg overflow-hidden">
                            <img
                                src="https://images.axios.com/hFaF3pJnLb8SmIUFZlMHGZjqksU=/293x0:3786x2620/768x576/2025/06/06/1749183700593.jpg"
                                alt="articleCover"
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-2">
                                <h6 className="text-md font-bold truncate">Article Title</h6>
                                <p className="text-sm text-gray-600 truncate">
                                    This is a brief description of the article. It provides an overview of the content.
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>

    )
}
