// COMPONENTS
import TopArticles from "./topArticles/TopArticles";
import Hero from "./hero/Hero";
import PortfolioOverview from "./portfolioOverview/PortfolioOverview";
import Testimonials from "./testimonials/Testimonials";
import CtaAccess from "./ctaAccess/CtaAccess";
import CtaServices from "./ctaServices/CtaServices";
import CtaAbout from "./ctaAbout/CtaAbout";

export default function Home() {

  return (
    <div className="space-y-3">
      <Hero />
      <TopArticles />
      <CtaAccess />
      <PortfolioOverview />
      <CtaServices />
      <Testimonials />
      <CtaAbout />
    </div>
  )
}
