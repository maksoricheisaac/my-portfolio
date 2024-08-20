import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riche Makso",
  description: "Hello! I am a junior fullstack web developer with a deep passion for crafting innovative digital solutions that make a difference.",
  authors: [
    {
      name: "Riche Makso",
      url: "https://github.com/maksoricheisaac"
    }
  ],
  openGraph: {
    type: "profile",
    title: "Hi ! I'm Riche Makso",
    images: [
      
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
