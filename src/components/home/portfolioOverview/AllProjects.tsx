import { useEffect, useState } from "react";
import { Link } from "react-router"

// UI COMPONENTS
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { HashLoader } from "react-spinners";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

// APIs
import { GET_allProjects } from "@/backend/services/portfolio/GET_allProjects";

// TYPES
import type { Models } from "node_modules/appwrite/types/client";


export default function AllProjects() {

    const { setLeft, setTitle } = useNavbar();

    const [projects, setProjects] = useState<Models.Document[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GET_allProjects()
            .then((res) => {
                setProjects(res);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching featured projects:", err);
            });
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center h-50">
            <HashLoader
                color="#4F46E5"
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );

    return (
        <ScrollArea className="w-full whitespace-nowrap mt-2 pt-2 bg-white">
            <div className="flex flex-row space-x-4 overflow-auto">
                {projects?.map((project, i) => {
                    if (i < 5) {
                        return (
                            <Link
                                key={project.$id}
                                to={`/portfolio/${project.$id}`}
                                onClick={() => {
                                    setLeft("portfolio");
                                    setTitle(`${project.title}`);
                                }}
                                className="w-[200px] flex-shrink-0">
                                <div className="border-1 rounded-lg overflow-hidden">
                                    <img
                                        src={project.coverURL}
                                        alt="projectCover"
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="p-2">
                                        <h6 className="text-md font-bold truncate">{project.title}</h6>
                                        <p className="text-sm text-gray-600 truncate">
                                            {project.overView || "No description available."}
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