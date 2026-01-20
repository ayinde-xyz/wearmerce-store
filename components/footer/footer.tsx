"use client";
import { useEffect, useState } from "react";
import Contact from "./contact";
import Socials from "./social";
import QuickLinks from "./quick-links";
import FooterCategories from "./footer-categories";
import NewsLetter from "./newsletter";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <footer className="bg-white border-t pl-4">
      <Contact />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b px-4">
        <Socials />
        <QuickLinks />
        <FooterCategories />
        <NewsLetter />
      </div>
      <div className="mx-auto py-2">
        <p className="text-center text-xs text-black">
          &copy;{" "}
          {dateTime.toLocaleDateString("en-US", {
            year: "numeric",
          })}{" "}
          Wearmerce Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
