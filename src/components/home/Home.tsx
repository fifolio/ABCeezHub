// COMPONENTS
import TopArticles from "./topArticles/TopArticles";
import Hero from "./hero/Hero";
import PortfolioOverview from "./portfolioOverview/PortfolioOverview";
import Testimonials from "./testimonials/Testimonials";
import CtaAccess from "./ctaAccess/CtaAccess";

export default function Home() {

  return (
    <div className="space-y-3">
      <Hero />
      <TopArticles />
      <CtaAccess />
      <PortfolioOverview />
      <Testimonials />
    </div>
  )
}
