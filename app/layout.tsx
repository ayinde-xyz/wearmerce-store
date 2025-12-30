import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { metadata } from "@/lib/metadata";

const font = Urbanist({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// ↑ @tailwindcss/postcss 4.1.3 → 4.1.17
// ↑ @types/node 22.10.2 → 24.10.1
// ↑ @types/react 19.0.2 → 19.2.6
// ↑ @types/react-dom 19.0.2 → 19.2.3
// ↑ eslint 9.17.0 → 9.39.1
// ↑ eslint-config-next 15.1.2 → 16.0.3
// ↑ next-video 2.0.0 → 2.5.1
// ↑ postcss 8.4.49 → 8.5.6
// ↑ tailwindcss 4.1.3 → 4.1.17
// ↑ typescript 5.7.2 → 5.9.3
// ↑ @headlessui/react 2.2.0 → 2.2.9
// ↑ @radix-ui/react-dialog 1.1.4 → 1.1.15
// ↑ axios 1.7.9 → 1.13.2
// ↑ lucide-react 0.469.0 → 0.554.0
// ↑ next 15.1.2 → 16.0.3
// ↑ query-string 9.1.1 → 9.3.1
// ↑ react 19.0.0 → 19.2.0
// ↑ react-dom 19.0.0 → 19.2.0
// ↑ react-hot-toast 2.4.1 → 2.6.0
// ↑ tailwind-merge 2.6.0 → 3.4.0
// ↑ zustand 5.0.2 → 5.0.8

// ↑ @biomejs/biome 2.3.6 → 2.3.10
// ↑ @tailwindcss/postcss 4.1.17 → 4.1.18
// ↑ @types/node 24.10.1 → 25.0.3
// ↑ @types/react 19.2.6 → 19.2.7
// ↑ eslint 9.39.1 → 9.39.2
// ↑ eslint-config-next 16.0.3 → 16.1.1
// ↑ next-video 2.5.1 → 2.6.0
// ↑ tailwindcss 4.1.17 → 4.1.18
// ↑ lucide-react 0.554.0 → 0.562.0
// ↑ next 16.0.3 → 16.1.1
// ↑ react 19.2.0 → 19.2.3
// ↑ react-dom 19.2.0 → 19.2.3
// ↑ zustand 5.0.8 → 5.0.9
