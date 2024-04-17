import { Montserrat } from "next/font/google";
import "./globals.css";
import PageContextProvider from "@/contexts/PageContext";
import Navbar from "@/components/navigation/Navbar";
import FloatingLayers from "@/components/navigation/FloatingLayers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Davide Minicelli",
  description: "Sviluppatore front end / Front end developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PageContextProvider>
        <body className={`${montserrat.className} relative flex flex-col min-h-screen justify-start`}>
          <Navbar />
          <FloatingLayers />
          <div className="mt-24 w-11/12 max-w-screen-lg mx-auto">

          {children}
          </div>
          </body>
      </PageContextProvider>
    </html>
  );
}
