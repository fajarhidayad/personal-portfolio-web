import type { NextPage } from "next";
import { GiStopSign } from "react-icons/gi";
import AnimationDiv from "../components/AnimationDiv";

const NotFoundPage: NextPage = () => {
  return (
    <AnimationDiv>
      <div className="flex items-center justify-center h-[70vh]">
        <h1 className="flex items-center justify-center text-center text-4xl font-light leading-snug">
          <GiStopSign className="mr-3" size={80} /> 404 | Page Not Found
        </h1>
      </div>
    </AnimationDiv>
  );
};

export default NotFoundPage;
