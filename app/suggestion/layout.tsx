import { ReactNode } from 'react';
import Header from "@/components/layout/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}