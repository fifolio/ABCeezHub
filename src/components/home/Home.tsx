import { Link } from "react-router";

// STORES
import { useNavbar } from "@/stores/navbar/useNavbar";

export default function Home() {


  const { setLeft, setTitle } = useNavbar();

  return (
    <>
      <Link to="articles" onClick={() => {
        setLeft('articles');
        setTitle('articles');
      }} className="bg-blue-500 text-white p-2 rounded">
        Go to Articles
      </Link>
    </>
  )
}
