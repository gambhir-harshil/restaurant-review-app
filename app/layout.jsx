import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import Navbar from "./_components/navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Footer from "./_components/footer";

export const metadata = {
  title: "YUM",
  description: "Rate your favourite restaurants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster position="bottom-center" />
          <main className="flex-grow h-full px-8 py-12 mt-16 md:px-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
