import React from "react";
import { Header } from "../../_layout/customers/header/Header";
import { Footer } from "../../_layout/customers/footer/Footer";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
