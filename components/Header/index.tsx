import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Header.module.css";
import { VscMenu } from "react-icons/vsc";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="container">
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
          <button className="block md:hidden text-2xl">
            <VscMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
