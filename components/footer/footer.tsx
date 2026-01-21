"use client";
import { useEffect, useState } from "react";
import Contact from "./contact";
import Socials from "./social";
import QuickLinks from "./quick-links";
import FooterCategories from "./footer-categories";
import NewsLetter from "./newsletter";
import Copyright from "./copyright";
import getCategories from "@/actions/get-categories";
import { Category } from "@/types";

interface FooterProps {
  categories: Category[];
}

const Footer = ({ categories }: FooterProps) => {
  return (
    <footer className="bg-white border-t pl-4">
      <Contact />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b px-4">
        <Socials />
        <QuickLinks />
        <FooterCategories categories={categories} />
        <NewsLetter />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
