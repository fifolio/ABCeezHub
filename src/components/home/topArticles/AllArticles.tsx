import { Link } from "react-router"

// UI
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

export default function AllArticles() {

    const { setLeft, setTitle } = useNavbar();

    return (
        <ScrollArea className="w-full whitespace-nowrap mt-2 pt-2 bg-white">
            <div className="flex flex-row space-x-4 overflow-auto">
                {[...Array(5)].map((_, i) => (
                    <Link
                        key={i}
                        to={`/articles/${i}`}
                        onClick={() => {
                            setLeft('articles');
                            setTitle(`Article ${i}`);
                        }}
                        className="w-[200px] flex-shrink-0">
                        <div className="border-1 rounded-lg overflow-hidden">
                            <img
                                src="https://miro.medium.com/v2/resize:fit:1204/0*4IpyHcVskpuGOvQn"
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
