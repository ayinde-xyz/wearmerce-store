import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

interface FeaturedListProps {
  title: string;
  products: Product[];
}

const FeaturedList = ({ title, products }: FeaturedListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl ">{title}</h3>
      {products?.length === 0 && <NoResults />}

      <ul className="grid  grid-flow-col auto-cols-max gap-4 overflow-x-auto pb-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedList;
