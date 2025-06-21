import { Skeleton } from "@/components/ui/skeleton"

export default function Skeleton_AllArticles() {
    return (
        <div className="flex flex-col space-y-3 mt-3 w-full items-center justify-center">
            {[...Array(10)].map((_, i) => (
                <Skeleton key={i} className="flex flex-col h-[156px] px-2 w-full rounded-xl bg-gray-200">

                    <div className="flex flex-row space-x-2">
                        <Skeleton className="h-[140px] w-[220px] rounded-xl bg-gray-300 my-2" />
                        <div className="flex flex-col w-7/7 ">
                            <Skeleton className="h-[22px] w-4/7 rounded-xl bg-gray-300 my-2" />
                            <Skeleton className="h-[107px] w-7/7 rounded-xl bg-gray-300" />
                        </div>
                    </div>
                </Skeleton>
            ))}
        </div>
    )
}
