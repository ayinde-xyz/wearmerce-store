import getCategories from "@/actions/get-categories";
import Navbar from "./navbar";

interface HeaderProps {
  categories: Awaited<ReturnType<typeof getCategories>>;
}

const Header = async ({ categories }: HeaderProps) => {
  return <Navbar categories={categories} />;
};

export default Header;
