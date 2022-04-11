import type { NextPage } from "next";
import { SiBootstrap, SiHtml5, SiLaravel, SiTailwindcss } from "react-icons/si";
import AnimationDiv from "../../components/AnimationDiv";
import PortfolioCard from "../../components/PortfolioCard";
import IconPortfolio from "../../components/PortfolioCard/IconPortfolio";

interface IProps {
  portfolio: [
    {
      id: number;
      attributes: {
        title: string;
        url: string;
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        build: [
          {
            id: number;
            build: string;
          }
        ];
      };
    }
  ];
  error: any;
}

const PortfolioPage: NextPage<IProps> = ({ portfolio, error }) => {
  return (
    <div>
      <AnimationDiv>
        <section className="mt-16 font-light">
          <h1 className="text-4xl mb-5">Portfolio</h1>
          <h3 className="text-2xl">
            List of all my projects I&apos;ve done in the past.
          </h3>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16 font-light">
          {portfolio.map((item) => {
            return (
              <PortfolioCard
                key={item.id}
                title={item.attributes.title}
                href={item.attributes.url}
                image={item.attributes.image.data.attributes.url}
                build={item.attributes.build}
              ></PortfolioCard>
            );
          })}
        </section>
      </AnimationDiv>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/portfolios?populate=*`
    );

    const { data } = await res.json();

    return {
      props: {
        portfolio: data,
      },
    };
  } catch (error) {
    return {
      props: {
        portfolio: [],
        error,
      },
    };
  }
}

export default PortfolioPage;
