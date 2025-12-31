import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wearmerce Stores",
  description: "This is an ecommerce store built with Next.js and React.",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  authors: { name: "Ayinde AbdurRahman" },
  keywords: ["Wearmerce", "Store", "Next.js", "React"],
  facebook: {
    appId: "656714972742959",
  },
  openGraph: {
    title: "Wearmerce Store",
    description: "This is an ecommerce store built with Next.js and React.",
    siteName: "Wearmerce Store",
    images: [
      {
        url: "https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png",
        alt: "Built by Ayinde AbdurRahman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wearmerce Store",
    description: "This is an ecommerce store built with Next.js and React.",
    site: "@ayinde_xyz",
    creator: "@ayinde_xyz",
    images: {
      url: "https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png",
      alt: "Built by Ayinde AbdurRahman",
    },
  },
};
