import { useEffect, useState } from "react";
import { useParams } from "react-router";

// ICONS
import { CalendarDays, Clock, Tag, User } from "lucide-react";

// SKELETONS
import { Skeleton_Article } from "@/skeletons";

// STORES
import { useSk_Article } from "@/stores/skeletons/ArticleScreen/sk_Article";
import { useNavbar } from "@/stores/navbar/useNavbar";

// APIs
import { GET_Article } from "@/backend/services/articles/GET_Article";

// INTERFACES
import type { Inter_Article } from "@/interfaces";


export default function Product() {

  const { articleID } = useParams();

  const { setLeft, setTitle } = useNavbar();

  const { sk_Article, setSk_Article } = useSk_Article();

  const [article, setArticle] = useState<Inter_Article | null>(null);

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
    });

    GET_Article(articleID as string)
      .then((res) => {
        setArticle(res);
        setSk_Article(false);
        setLeft("articles");
        setTitle(`${res.title}`);
        console.log(res)
      })
      .catch((err) => {
        console.error("Error fetching featured article:", err);
      })
  }, []);


  if (sk_Article || !article) return <Skeleton_Article />;

  return (
    <>
      {/* HERO IMAGE */}
      <div
        className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-lg min-h-80 shadow-sm mb-3"
        style={{
          backgroundImage:
            `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(${article.coverURL})`,
        }}
      >
      </div>

      {/* DETAILS */}
      <div className="flex border-1 bg-white p-4 rounded-md gap-4">
        {/* Author */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex h-8 items-center justify-center">
            <User className="w-6 h-6 text-orange-700" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold block">Author</span>
            <span className="text-xs font-medium text-gray-700 capitalize">
              {article.author}
            </span>
          </div>
        </div>

        {/* Published */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex h-8 items-center justify-center">
            <CalendarDays className="w-6 h-6 text-orange-700" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold block">Published</span>
            <span className="text-xs font-medium text-gray-700">
              {article.$createdAt.split("T")[0]}
            </span>
          </div>
        </div>

        {/* Reading Time */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex h-8 items-center justify-center">
            <Clock className="w-6 h-6 text-orange-700" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold block">Reading Time</span>
            <span className="text-xs font-medium text-gray-700 capitalize">
              {article.readingTime} min read
            </span>
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex h-8 items-center justify-center">
            <Tag className="w-6 h-6 text-orange-700" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold block">Category</span>
            <span className="text-xs font-medium text-gray-700 capitalize">
              {article.category}
            </span>
          </div>
        </div>
      </div>

      {/* ALL DETAILS */}
      <div key={article.$id} className="bg-white mt-2 border-1 rounded-md p-4">
        <h2 className="text-black text-[22px] font-bold py-1 capitalize">
          {article.title}
        </h2>
        <p className="text-gray-800 text-base font-normal py-2">
          {article.content}
        </p>
      </div>

    </>

  );
}