import type { NextPage } from "next";
import AnimationDiv from "../../components/AnimationDiv";

const PortfolioPage: NextPage = () => {
  return (
    <div>
      <AnimationDiv>
        <section className="mt-16 font-light">
          <h1 className="text-4xl mb-5">Portfolio</h1>
          <h3 className="text-2xl">
            List of all my projects I&apos;ve done in the past.
          </h3>
        </section>
      </AnimationDiv>
    </div>
  );
};

export default PortfolioPage;
