import { Link } from "react-router";

// COMPONENTS
import AllArticles from "./AllArticles";

// PROMPTS
import { topArticlesTexts } from "@/prompts";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

export default function TopArticles() {

  const { setLeft, setTitle } = useNavbar();

  return (
    <div className="flex flex-col bg-white border-1 shadow-sm rounded-lg pt-2 pb-4 px-3">

      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between my-2">
          <h6 className="text-lg font-extrabold capitalize">{topArticlesTexts.topArticlesTitle}</h6>
          <Link
            to="/articles"
            onClick={() => {
              setLeft('articles');
              setTitle('Articles');
            }}
            className="text-md text-blue-500 font-semibold hover:underline">
            Read more
          </Link>
        </div>
        <p className="text-sm text-gray-700 italic">{topArticlesTexts.topArticlesSubtitle}</p>
      </div>

      <AllArticles />

    </div>
  )
}
