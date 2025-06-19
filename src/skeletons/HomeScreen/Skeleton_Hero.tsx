import { Skeleton } from "@/components/ui/skeleton"

export default function Skeleton_Hero() {
    return (
        <div className="flex flex-col space-y-3 w-full items-center justify-center">
            <div className="space-y-2 flex flex-col items-center">
                <Skeleton className="h-5 w-[200px] bg-gray-300" />
                <Skeleton className="h-4 w-[300px] bg-gray-300" />
            </div>
            <Skeleton className="h-[300px] w-full rounded-xl bg-gray-300" />
        </div>
    )
}
