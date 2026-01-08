import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import { LanguageProvider } from "./contexts/LanguageContext";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sacha Hajjar - Software Engineer | Full-Stack Developer",
  description: "Portfolio of Sacha Hajjar, Software Engineer and ISEP graduate specializing in full-stack development, data analytics, and AI solutions. Open to new opportunities.",
  keywords: ["Sacha Hajjar", "Software Engineer", "Full-Stack Developer", "ISEP", "Web Development", "Data Analytics", "AI Solutions", "Portfolio", "Job Seeker"],
  authors: [{ name: "Sacha Hajjar" }],
  openGraph: {
    title: "Sacha Hajjar - Software Engineer Portfolio",
    description: "Software Engineer | Full-Stack Developer | ISEP Graduate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <StructuredData />
        <ThemeProviderWrapper>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
