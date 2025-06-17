// UI COMPONENTS
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function SortBy() {
  return (
    <>
      <Select>
        <SelectTrigger className="bg-white shadow-xs py-6 w-full">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort articles by</SelectLabel>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
