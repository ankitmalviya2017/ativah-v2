import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ativah - Modern Menswear",
  description:
    "Shop the latest in men's fashion. Ativah offers trendy and stylish clothing for men.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen flex flex-col`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
