import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
	const res = await fetch(URL);

	return res.json();
};

export default getColors;
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
