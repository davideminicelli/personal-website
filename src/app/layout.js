import { Montserrat } from "next/font/google";
import "./globals.css";
import PageContextProvider from "@/contexts/PageContext";
import Navbar from "@/components/navigation/Navbar";
import FloatingMenu from "@/components/navigation/FloatingMenu/FloatingMenu";

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
          <FloatingMenu />
          <div className="md:mt-24">

          {children}
          </div>
          </body>
      </PageContextProvider>
    </html>
  );
}
