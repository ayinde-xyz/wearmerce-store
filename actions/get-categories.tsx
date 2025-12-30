import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(URL);

	return res.json();
};

export default getCategories;

// const getCategories = async (): Promise<Category[]> => {
//   const categories = await prismadb.category.findMany({
//     where: { storeId: "0f38adb8-90ae-4f18-92cc-f06e3166d56c" },
//     include: { billboard: true },
//     orderBy: { createdAt: "desc" },
//   });

//   return categories;
// };

// export default getCategories;

// export const getCategory = async (categoryId: string) => {
//   const categories = await prismadb.category.findUnique({
//     where: { storeId: "0f38adb8-90ae-4f18-92cc-f06e3166d56c", id: categoryId },
//     include: { billboard: true },
//   });

//   return categories;
// };
