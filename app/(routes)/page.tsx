import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Banner from "@/components/billboard/banner";
import Billboard from "@/components/billboard/billboard";
import Billboard2 from "@/components/billboard/billboard2";
import FeaturedList from "@/components/featured-list";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("65146f94-01b8-4d30-be3a-beb82ba284b3");
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <>
      <Header categories={categories} />
      <div className="space-y-10 pb-y-10">
        <Billboard data={billboard} />
        <Banner />
        <Billboard2 />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pb-6">
          <FeaturedList title={"Featured Products"} products={products} />

          {/* <ProductList title="Featured Products" products={products} /> */}
        </div>
      </div>
      <Footer categories={categories} />
    </>
  );
};

export default HomePage;
