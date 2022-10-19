import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-gray-100">{children}</main>
      <Footer />
    </>
  );
}
