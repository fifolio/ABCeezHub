// COMPONENTS
import TopArticles from "../topArticles/TopArticles";
import Hero from "./hero/Hero";

export default function Home() {

  return (
    <div className="pt-20 pb-20 space-y-3">
      <Hero />
      <TopArticles />
    </div>
  )
}
