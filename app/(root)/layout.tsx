import { ReactNode } from "react";

import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
