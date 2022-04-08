import React from "react";
import Icon from "./Icon";

interface IProps {
  title: string;
}

const IconPortfolio = ({ title }: IProps) => {
  return (
    <div className="flex flex-col items-center">
      {<Icon name={title} />}
      <p>{title.toUpperCase()}</p>
    </div>
  );
};

export default IconPortfolio;
