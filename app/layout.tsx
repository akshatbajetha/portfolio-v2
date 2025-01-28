import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshat Bajetha",
  description: "Akshat Bajetha's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamond.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
