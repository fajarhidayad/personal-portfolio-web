import { motion } from "framer-motion";
import Head from "next/head";

interface IProps {
  children: React.ReactNode;
  title?: string;
}

const AnimationDiv = ({ children, title }: IProps) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: "-5%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "5%" }}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Head>
          <title>{title} Fajar Hidayad</title>
        </Head>
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationDiv;
