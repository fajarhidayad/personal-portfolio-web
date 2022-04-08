import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconPortfolio from "./IconPortfolio";

interface IProps {
  title: string;
  href: string;
  image: string;
  build: [
    {
      id: number;
      build: string;
    }
  ];
}

const PortfolioCard = ({ title, href, image, build }: IProps) => {
  return (
    <div className="rounded-md shadow-md overflow-hidden border dark:border-slate-600 p-4 hover:scale-105 hover:shadow-xl transition-all ease-in-out duration-200">
      <Link href={href}>
        <a>
          <div className="border rounded mb-4 overflow-hidden">
            <Image src={image} width={"360px"} height={"225px"} alt={image} />
          </div>
          <h3 className="text-2xl mb-3">{title}</h3>
          <h4 className="text-lg mb-3">Build with:</h4>
          <div className="flex space-x-3 flex-wrap">
            {build.map((icon) => (
              <IconPortfolio key={icon.id} title={icon.build} />
            ))}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PortfolioCard;
