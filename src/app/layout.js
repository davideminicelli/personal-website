import { Montserrat, Major_Mono_Display } from "next/font/google";
import PageContextProvider from "@/contexts/PageContext";
import Navbar from "@/components/navigation/Navbar";
import FloatingLayers from "@/components/navigation/FloatingLayers";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"],
  variable: "--font-montserrat"
 });
const headingFont = Major_Mono_Display({ subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
 });

export const metadata = {
  title: "Davide Minicelli - Web Developer",
  description: "Sviluppatore front end / Front end developer",
  OpenGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://davideminicelli.com",
    title: "Davide Minicelli - Web Developer",
    description: "Sviluppatore front end / Front end developer",
    site_name: "Davide Minicelli - Web Developer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PageContextProvider>
        <body className={`${montserrat.variable} ${headingFont.variable} relative flex flex-col min-h-screen justify-start`}>
          <Navbar />
          <FloatingLayers />
          {children}
        </body>
      </PageContextProvider>
    </html>
  );
}
