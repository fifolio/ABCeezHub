import { Link } from "react-router"

// UI
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

export default function AllProducts() {

    const { setLeft, setTitle } = useNavbar();

    return (
        <ScrollArea className="w-full whitespace-nowrap mt-2 pt-2 bg-white">
            <div className="flex flex-row space-x-4 overflow-auto">
                {[...Array(5)].map((_, i) => (
                    <Link
                        key={i}
                        to={`/portfolio/${i}`}
                        onClick={() => {
                            setLeft('portfolio');
                            setTitle(`Portfolio ${i}`);
                        }}
                        className="w-[200px] flex-shrink-0">
                        <div className="border-1 rounded-lg overflow-hidden">
                            <img
                                src="https://knowledge.hubspot.com/hubfs/ai-wordpress-themes-1-20250205-5551419.webp"
                                alt="articleCover"
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-2">
                                <h6 className="text-md font-bold truncate">Product Title</h6>
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
