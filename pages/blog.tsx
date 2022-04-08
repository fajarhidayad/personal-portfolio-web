import type { NextPage } from "next";
import Head from "next/head";
import AnimationDiv from "../components/AnimationDiv";

const BlogPage: NextPage = () => {
  return (
    <AnimationDiv>
      <Head>
        <title>Fajar Hidayad</title>
      </Head>
      <section className="font-light mt-16 w-1/2">
        <h1 className="text-4xl mb-5">Articles</h1>
        <h3 className="text-2xl">
          Any experience and knowledge that I get, I share through writing
        </h3>
      </section>
    </AnimationDiv>
  );
};

export default BlogPage;
