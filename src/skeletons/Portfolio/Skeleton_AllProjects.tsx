import { Skeleton } from "@/components/ui/skeleton"

export default function Skeleton_AllProjects() {
    return (
        <div className="flex flex-col space-y-3 mt-3 w-full items-center justify-center">
            {[...Array(10)].map((_, i) => (
                <Skeleton key={i} className="flex flex-col h-[300px] space-y-3 p-2 w-full rounded-xl bg-gray-200">
                    <Skeleton className="h-[200px] w-full rounded-xl bg-gray-300" />
                    <Skeleton className="h-[100px] w-full rounded-xl bg-gray-300" />
                </Skeleton>
            ))}
        </div>
    )
}
