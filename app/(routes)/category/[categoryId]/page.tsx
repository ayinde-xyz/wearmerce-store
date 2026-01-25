import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard/billboard";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import { Metadata, ResolvingMetadata } from "next";
import getBillboard from "@/actions/get-billboards";

export const revalidate = 0;

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
  searchParams: Promise<{
    colorId: string;
    sizeId: string;
  }>;
}

export async function generateMetadata(
  { params }: CategoryPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { categoryId } = await params;
  const category = await getCategory(categoryId);
  const billboard = await getBillboard({ categoryId });

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The category you are looking for does not exist.",
    };
  }

  console.log(billboard[0].imageUrl);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${category.name} Collection`,
    description: `Shop ${category.name} from our collection of products.`,
    openGraph: {
      title: `${category.name} Collection`,
      type: "website",
      siteName: "Ecommerce Store",
      url: `https://${process.env.VERCEL_URL}/category/${category.id}`,
      description: `Shop ${category.name} from our collection of products.`,
      images: [billboard && billboard[0].imageUrl, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Collection`,
      description: `Shop ${category.name} from our collection of products.`,
      site: "@ayinde_xyz",
      creator: "@ayinde_xyz",
      images: {
        url: billboard && billboard[0].imageUrl,
        alt: "Built by Ayinde AbdurRahman",
      },
    },
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;
  const products = await getProducts({
    categoryId: categoryId,
    colorId: colorId,
    sizeId: sizeId,
  });

  // console.log(products);

  const sizes = await getSizes();
  const colors = await getColors();
  const billboard = await getBillboard({ categoryId });
  // const category = await getCategory(categoryId);
  // console.log(category);

  return (
    <div className="bg-white space-y-10">
      <Billboard data={billboard} />

      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilters sizes={sizes} colors={colors} />
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products?.length === 0 && <NoResults />}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
