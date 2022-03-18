import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useTheme } from "next-themes";

interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    }

    setMounted(true);
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <div className={theme}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0F172A] text-slate-900 dark:text-slate-300 transition-all ease-in-out">
        <Header />
        <main className="container grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainContent;
