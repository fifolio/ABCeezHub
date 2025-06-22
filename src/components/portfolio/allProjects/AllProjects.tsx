import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";
import { useSk_AllProjects } from "@/stores/skeletons/Portfolio/sk_AllProjects";

// SKELETONS
import { Skeleton_AllProjects } from "@/skeletons";

// APIs
import { GET_allProjects } from "@/backend/services/portfolio/GET_allProjects";

// TYPES
import type { Models } from "node_modules/appwrite/types/client";

// ICONS
import { Monitor, MoreHorizontal, Smartphone } from "lucide-react";

export default function AllProjects() {
    const { setLeft, setTitle } = useNavbar();
    const { sk_AllProjects, setSk_AllProjects } = useSk_AllProjects();

    const [projects, setProjects] = useState<Models.Document[]>([]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })

        setSk_AllProjects(true)

        GET_allProjects()
            .then((res) => {
                setProjects(res);
                setSk_AllProjects(false);
            })
            .catch((err) => {
                console.error("Error fetching projects:", err);
            })

    }, [])

    
    if (sk_AllProjects || projects.length < 0) return (<Skeleton_AllProjects />)

    return (
        <div className="mt-5 flex flex-col space-y-3">
            {projects.map((project) => (
                <Link
                    key={project.$id}
                    to={`/portfolio/${project.$id}`}
                    onClick={() => {
                        setLeft("portfolio");
                        setTitle(`${project.title}`);
                    }}
                    className="flex flex-col md:flex-row rounded-md overflow-hidden shadow-md border-1 bg-white">

                    {/* INSIGHTS */}
                    <div className="absolute flex flex-row items-center justify-start">

                        <div className="text-green-700 font-bold shadow bg-white mt-3 ml-3 px-3 rounded-full py-2 w-fit">
                            Case study available
                        </div>

                        {project.features.includes("Mobile_App") && (
                            <div className="text-orange-700 shadow bg-white mt-3 ml-3 px-3 rounded-full py-2 w-fit">
                                <Smartphone />
                            </div>
                        )}

                        {project.features.includes("Web_App") && (
                            <div className="text-blue-700 shadow bg-white mt-3 ml-3 px-3 rounded-full py-2 w-fit">
                                <Monitor />
                            </div>
                        )}

                        {project.features.length > 0 && (
                            <div className="text-gray-500 shadow bg-white mt-3 ml-3 px-3 rounded-full py-2 w-fit">
                                <MoreHorizontal />
                            </div>
                        )}

                    </div>

                    {/* PROJECT IMAGE  */}
                    <div
                        className="w-full md:w-2/3 h-[200px] md:h-auto bg-gray-200"
                        style={{
                            backgroundImage: `url(${project.coverURL})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-between p-4 w-full md:w-1/3">
                        <div>
                            <h2 className="text-lg font-semibold line-clamp-2 mb-1">
                                {project.title}
                            </h2>
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {project.overview}
                            </p>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    );
}
