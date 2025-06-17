// UI COMPONENTS
import SortBy from "./filters/sortby/SortBy";
import Search from "./search/Search";

export default function Tools() {
    return (
        <div className="flex flex-row items-center justify-between border-b-1 pb-3 space-x-2">
            <div className="w-2/3">
                <Search />
            </div>
            <div className="w-1/3">
                <SortBy />
            </div>
        </div>
    )
}
