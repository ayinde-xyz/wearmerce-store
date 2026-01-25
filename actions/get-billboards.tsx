import { Billboard } from "@/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

interface Query {
  categoryId?: string;
}

const getBillboard = async (query: Query): Promise<Billboard[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
    },
  });
  const res = await fetch(`${url}`);

  return res.json();
};

export default getBillboard;

// const categories = await prismadb.billboard.findMany({
//   where: { storeId: "0f38adb8-90ae-4f18-92cc-f06e3166d56c" },
//   include: { billboard: true },
//   orderBy: { createdAt: "desc" },
// });

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// export default getCategories;
// const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "bba7a8c55cmsh90a8f9b7e8f7351p1b8023jsn5c8137f03f17",
//     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//   },
// };
// const getCategories: any = async () => {
//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(result);
//   return result;
// };

// getCategories();

// export default getCategories;
