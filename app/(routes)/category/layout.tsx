import getCategories from "@/actions/get-categories";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <>
      <Header categories={categories} />
      {children}
      <Footer categories={categories} />
    </>
  );
}
