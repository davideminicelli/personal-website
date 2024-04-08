import { Montserrat } from "next/font/google";
import "./globals.css";
import PageContextProvider from "@/contexts/PageContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Davide Minicelli",
  description: "Sviluppatore front end / Front end developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PageContextProvider>
        <body className={`${montserrat.className}`}>{children}</body>
      </PageContextProvider>
    </html>
  );
}
