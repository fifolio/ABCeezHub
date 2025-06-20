import { Skeleton } from "@/components/ui/skeleton"

export default function Skeleton_Article() {
    return (
        <div className="flex flex-col space-y-3 w-full items-center justify-center">
            <Skeleton className="h-[300px] w-full rounded-xl bg-gray-300" />
            <Skeleton className="h-[100px] w-full rounded-xl bg-gray-300" />
            <Skeleton className="h-[400px] w-full rounded-xl bg-gray-300" />
        </div>
    )
}
