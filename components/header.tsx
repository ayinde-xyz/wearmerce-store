import getCategories from "@/actions/get-categories";
import Navbar from "./navbar";

const Header = async () => {
  const categories = await getCategories();
  return <Navbar categories={categories} />;
};

export default Header;
