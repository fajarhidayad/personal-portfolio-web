import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import AnimationDiv from "../components/AnimationDiv";
import Head from "next/head";
import { FaLinkedin, FaGithub, FaMedium, FaTwitter } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiDocker,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface Props {
  attributes: {
    description: string;
    about: string;
  };
  error: any;
}

const Home: NextPage<Props> = ({ attributes, error }) => {
  if (error) {
    return (
      <div>
        <h2 className="text-center text-2xl">
          An error occured: {error.message}
        </h2>
      </div>
    );
  }

  return (
    <AnimationDiv>
      <Head>
        <title>Fajar Hidayad</title>
      </Head>
      <section className="font-light w-full md:w-3/4 xl:w-1/2 mt-10">
        <h1 className="text-3xl leading-relaxed md:leading-normal md:text-6xl">
          Hi, I&apos;m Fajar Surya Hidayad 🌞
        </h1>
        <h2 className="text-xl md:text-3xl mt-4">
          {/* Frontend Developer focused on React &amp; Next JS from Surabaya. */}
          {attributes.description}
        </h2>
        <div className="flex space-x-5 mt-7 text-3xl text-slate-600 dark:text-slate-400">
          <Link href="https://www.linkedin.com/in/fajar-hidayad-0a6963133/">
            <a className="hover:text-slate-900 dark:hover:text-slate-300 transition-all ease-in">
              <FaLinkedin />
            </a>
          </Link>
          <Link href="https://github.com/fajarhidayad">
            <a className="hover:text-slate-900 dark:hover:text-slate-300 transition-all ease-in">
              <FaGithub />
            </a>
          </Link>
          <Link href="https://medium.com/@fajarhidayad">
            <a className="hover:text-slate-900 dark:hover:text-slate-300 transition-all ease-in">
              <FaMedium />
            </a>
          </Link>
          <Link href="https://twitter.com/surya_hidayad">
            <a className="hover:text-slate-900 dark:hover:text-slate-300 transition-all ease-in">
              <FaTwitter />
            </a>
          </Link>
        </div>
      </section>
      <section className="mt-24 font-light w-full md:w-3/4 xl:w-1/2">
        <h2 className="text-xl md:text-4xl">About Me</h2>
        {/* <p className="text-lg mt-5">
          I am an Information System college student at Jember University,
          currently working on my thesis and learn some of different web
          technologies such as MERN Stack (MongoDB, Express, React, Node Js).
        </p>
        <p className="text-lg mt-5">
          Recently, I am learning about Docker and AWS, also I writing my new
          favorite frameworks Tailwind CSS in medium.
        </p> */}
        <p className="text-lg mt-5">{attributes.about}</p>
      </section>
      <section className="mt-24 font-light">
        <h2 className="text-xl md:text-4xl">Skills</h2>
        <div className="flex mt-3 justify-between w-full md:w-3/4 xl:w-1/2 flex-wrap">
          <div className="flex flex-col items-center space-y-3 w-1/4 mt-4">
            <SiReact size={50} />
            <p>React JS</p>
          </div>
          <div className="flex flex-col items-center space-y-3 w-1/4 mt-4">
            <SiNextdotjs size={50} />
            <p>Next.js</p>
          </div>
          <div className="flex flex-col items-center space-y-3 w-1/4 mt-4">
            <SiExpress size={50} />
            <p>Express</p>
          </div>
          <div className="flex flex-col items-center space-y-3 w-1/4 mt-4">
            <SiDocker size={50} />
            <p>Docker</p>
          </div>
          <div className="flex flex-col items-center space-y-3 w-1/4 mt-4">
            <SiMongodb size={50} />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center space-y-3 w-1/4 mt-4">
            <SiTailwindcss size={50} />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center space-y-3 w-1/4 mt-4">
            <SiTypescript size={50} />
            <p>TypeScript</p>
          </div>
        </div>
      </section>
      <section className="mt-24">
        <div>
          <p className="font-thin">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </section>
    </AnimationDiv>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/home`);

    const { data } = await res.json();

    return {
      props: {
        attributes: data.attributes,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};

export default Home;
