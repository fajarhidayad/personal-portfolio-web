import React from "react";

const Footer = () => {
  return (
    <footer className="container mt-10">
      <div className="flex justify-center items-center border-t border-t-slate-500 py-6">
        <h4 className="font-light">
          Copyright &copy; {new Date().getFullYear()} Fajar Hidayad
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
