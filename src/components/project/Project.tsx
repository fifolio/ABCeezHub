import { useEffect, useState } from "react";
import { useParams } from "react-router";

// ICONS
import { Check, CheckCircle, Copy, MoreHorizontal } from "lucide-react";

// SKELETONS
import { Skeleton_Project } from "@/skeletons";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";
import { useSk_Project } from "@/stores/skeletons/ProjectScreen/sk_Project";

// APIs
import { GET_Project } from "@/backend/services/portfolio/GET_Project";

// TYPES
import type { Models } from "node_modules/appwrite/types/client";

// UI
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { toast } from "sonner"



export default function Project() {

  const { projectID } = useParams();

  const { setLeft, setTitle } = useNavbar();

  const { sk_Project, setSk_Project } = useSk_Project();

  const [project, setProject] = useState<Models.Document | null>(null);

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
    });

    GET_Project(projectID as string)
      .then((res) => {
        setProject(res);
        setSk_Project(false);
        setLeft("articles");
        setTitle(`${res.title}`);
      })
      .catch((err) => {
        console.error("Error fetching featured article:", err);
      })
  }, []);



  if (sk_Project || !project) return <Skeleton_Project />;

  return (
    <>

      {/* HERO IMAGE */}
      <div
        className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-lg min-h-80 shadow-sm mb-3"
        style={{
          backgroundImage:
            `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url('${project.coverURL}')`,
        }}
      >
      </div>

      {/* DETAILS */}
      <div className="flex border-1 bg-white p-4 rounded-md">
        {project.features.map((feature: string, i: number) => {
          if (i < 3) {
            return (
              <div key={i}
                className="flex flex-col items-center space-y-2 justify-end w-full">
                <div className="flex h-8 items-center justify-center">
                  <Check className="w-6 h-6 p-1 bg-green-600 text-white rounded-full" />
                </div>
                <span className="text-xs font-medium">{feature.split("_").join(" ")}</span>
              </div>
            );
          } else if (i === 4) {
            return (
              <div
                key={i}
                className="flex flex-col items-center space-y-2 justify-center w-full"
              >
                <div className="flex h-8 items-center justify-center shadow-md rounded-full">
                  <Dialog>
                    <DialogTrigger className="cursor-pointer" aria-label="View all features">
                      <MoreHorizontal className="w-10 h-10 p-1 bg-white border text-gray-800 rounded-full hover:bg-gray-100 transition" />
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-bold text-lg">All Features</DialogTitle>
                        <p className="text-sm text-muted-foreground mb-2">
                          This project includes the following capabilities and technologies.
                        </p>

                        <DialogDescription>
                          <ScrollArea className="w-full h-[300px] pr-2">
                            <div className="space-y-2">
                              {project.features.map((feature: string, i: number) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-3 px-4 py-2 border-b last:border-none hover:bg-muted rounded-md transition"
                                >
                                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                                  <span className="text-sm font-medium text-gray-900">
                                    {feature.split("_").join(" ")}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* OVERVIEW */}
      {project.overview !== null && (
        <div className="bg-white mt-2 border-1 rounded-md p-4">
          <h2 className="text-black text-[22px] font-bold py-1 capitalize">
            overview
          </h2>
          <p className="text-gray-800 text-base font-normal py-2">
            {project.overview}
          </p>
        </div>
      )}

      {/* CHALLENGES */}
      {project.challenges !== null && (
        <div className="bg-white mt-2 border-1 rounded-md p-4">
          <h2 className="text-black text-[22px] font-bold py-1 capitalize">
            Challenges
          </h2>
          <p className="text-gray-800 text-base font-normal py-2">
            {project.challenges}
          </p>
        </div>
      )}

      {/* DESIGN APPROACH */}
      {project.design !== null && (
        <div className="bg-white mt-2 border-1 rounded-md p-4">
          <h2 className="text-black text-[22px] font-bold py-1 capitalize">
            Design Approach
          </h2>
          <p className="text-gray-800 text-base font-normal py-2 break-words">
            {project.design}
          </p>
        </div>
      )}

      {/* RESULTS */}
      {project.results !== null && (
        <div className="bg-white mt-2 border-1 rounded-md p-4">
          <h2 className="text-black text-[22px] font-bold py-1 capitalize">
            Results
          </h2>
          <p className="text-gray-800 text-base font-normal py-2 break-words">
            {project.results}
          </p>
        </div>
      )}

      {/* EXTERNAL URL */}
      {project.externalURL !== null && (
        <div className="bg-white mt-2 py-8 border-1 rounded-md p-3 ">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(`${project.externalURL}`);
              toast.success("Copied! You can now share or visit the link.");
            }}
            variant="default"
            className="flex justify-around mx-auto space-x-8 px-6 py-6 text-white bg-gray-700 border shadow-md font-normal rounded-full break-words"
          >
            <div>
              <b>Live link available</b>
            </div>
            <div className="flex items-center space-x-2">
              <i>Click to copy</i>
              <Copy className="text-white" />
            </div>
          </Button>
        </div >
      )}

      {/* PROJECT CASE STUDY */}
      {!project.hasCaseStudy && (
        <div className="bg-yellow-50 mt-2 border-1 rounded-md p-4">
          <h2 className="text-yellow-900 text-lg font-bold py-1 capitalize">
            Case Study Unavailable
          </h2>
          <p className="text-yellow-800 text-base font-normal py-2">
            This project does not have a detailed case study ready yet.
          </p>
        </div>
      )}
    </>
  );
}