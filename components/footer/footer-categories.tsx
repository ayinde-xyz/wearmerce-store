import { Category } from "@/types";

interface FooterCategoriesProps {
  categories: Category[];
}

const FooterCategories = ({ categories }: FooterCategoriesProps) => {
  return (
    <div className="pt-6">
      <h3 className="text-lg font-bold">Category</h3>
      <ul className="mt-4 space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <a href={`/category/${category.name}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCategories;
