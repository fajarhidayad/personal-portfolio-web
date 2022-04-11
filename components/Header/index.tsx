import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Header.module.css";
import { VscMenu } from "react-icons/vsc";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const animate = {
    hidden: {
      x: "-150vw",
    },
    visible: {
      x: "-50vw",
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: "-150vw",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="relative">
      <div className="container">
        <div className="flex justify-between items-center py-6">
          <Link href="/">
            <a className="text-2xl font-light text-slate-900 dark:text-slate-200">
              Fajar Hidayad
            </a>
          </Link>
          <div className="hidden md:flex justify-between items-center space-x-6">
            <Link href="/">
              <a
                className={
                  (router.pathname === "/"
                    ? styles.navLinkActive
                    : styles.navLinkInactive) +
                  " text-slate-900 dark:text-slate-200 dark:border-b-slate-200 dark:hover:border-b-slate-200"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/portfolio">
              <a
                className={
                  (router.pathname === "/portfolio"
                    ? styles.navLinkActive
                    : styles.navLinkInactive) +
                  " text-slate-900 dark:text-slate-200 dark:border-b-slate-200 dark:hover:border-b-slate-200"
                }
              >
                Portfolio
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={
                  (router.pathname === "/blog"
                    ? styles.navLinkActive
                    : styles.navLinkInactive) +
                  " text-slate-900 dark:text-slate-200 dark:border-b-slate-200 dark:hover:border-b-slate-200"
                }
              >
                Blog
              </a>
            </Link>
            <span className="border-r border-slate-600 dark:border-slate-300 h-7"></span>
            <button
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                  localStorage.setItem("theme", "dark");
                } else {
                  setTheme("light");
                  localStorage.setItem("theme", "light");
                }
              }}
              className="text-xl transition-all ease-in-out text-slate-900 dark:text-slate-200"
            >
              {theme === "dark" ? (
                <BsSun className="transition-all ease-in-out" />
              ) : (
                <BsMoon className="transition-all ease-in-out" />
              )}
            </button>
          </div>
          <div className="flex md:hidden space-x-4">
            <button
              onClick={() => {
                if (theme === "light") {
                  setTheme("dark");
                  localStorage.setItem("theme", "dark");
                } else {
                  setTheme("light");
                  localStorage.setItem("theme", "light");
                }
              }}
              className="text-xl transition-all ease-in-out text-slate-900 dark:text-slate-200"
            >
              {theme === "dark" ? (
                <BsSun className="transition-all ease-in-out" />
              ) : (
                <BsMoon className="transition-all ease-in-out" />
              )}
            </button>
            <button className="text-2xl relative" onClick={handleNav}>
              <VscMenu />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {nav && (
          <motion.div
            variants={animate}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bg-white dark:bg-[#0F172A] flex flex-col items-center space-y-4 py-4 px-6 top-[100%] left-1/2 -translate-x-1/2 border-t text-base h-screen w-full z-10"
          >
            <Link href="/">
              <a
                className="text-slate-700 dark:text-slate-200"
                onClick={handleNav}
              >
                Home
              </a>
            </Link>
            <Link href="/portfolio">
              <a
                className="text-slate-700 dark:text-slate-200"
                onClick={handleNav}
              >
                Portfolio
              </a>
            </Link>
            <Link href="/blog">
              <a
                className="text-slate-700 dark:text-slate-200"
                onClick={handleNav}
              >
                Blog
              </a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
