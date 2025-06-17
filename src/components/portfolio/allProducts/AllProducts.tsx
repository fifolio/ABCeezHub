import { useEffect } from "react";
import { Link } from "react-router-dom";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

// ICONS
import { Monitor, Smartphone } from "lucide-react";

export default function AllProducts() {
    const { setLeft, setTitle } = useNavbar();


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }, [])

    return (
        <div className="mt-5 flex flex-col space-y-3">
            {[...Array(10)].map((_, i) => (
                <Link
                    key={i}
                    to={`/portfolio/${i}`}
                    onClick={() => {
                        setLeft("portfolio");
                        setTitle(`${i}`);
                    }}
                    className="flex flex-col md:flex-row rounded-md overflow-hidden shadow-md border-1 bg-white">

                    {/* INSIGHTS */}
                    <div className="absolute flex flex-row items-center justify-start">

                        <div className="text-green-700 font-bold shadow bg-white mt-3 ml-3 px-3 rounded-full py-2 w-fit">
                            Case study available
                        </div>

                        <div className="text-orange-700 shadow bg-white mt-3 ml-3 px-3 rounded-full py-2 w-fit">
                            <Smartphone />
                        </div>

                        <div className="text-blue-700 shadow bg-white mt-3 ml-3 px-3 rounded-full py-2 w-fit">
                            <Monitor />
                        </div>

                    </div>

                    {/* PRODUCT IMAGE - covers majority */}
                    <div
                        className="w-full md:w-2/3 h-[200px] md:h-auto bg-gray-200"
                        style={{
                            backgroundImage: `url('https://placehold.co/600x400')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-between p-4 w-full md:w-1/3">
                        <div>
                            <h2 className="text-lg font-semibold line-clamp-2 mb-1">
                                Product {i} – Modern Tech Gadget
                            </h2>
                            <p className="text-sm text-gray-600 line-clamp-2">
                                Sleek, powerful, and designed for everyday use. Perfect for modern lifestyles.
                            </p>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    );
}
