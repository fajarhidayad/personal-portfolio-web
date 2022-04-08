import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiLaravel,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

interface Props {
  name: string;
}

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case "react":
      return <SiReact size={30} />;
    case "next":
      return <SiNextdotjs size={30} />;
    case "tailwind":
      return <SiTailwindcss size={30} />;
    case "html":
      return <SiHtml5 size={30} />;
    case "css":
      return <SiCss3 size={30} />;
    case "laravel":
      return <SiLaravel size={30} />;
    case "bootstrap":
      return <SiBootstrap size={30} />;
    case "nodejs":
      return <SiNodedotjs size={30} />;
    case "express":
      return <SiExpress size={30} />;
    default:
      return <></>;
  }
};

export default Icon;
