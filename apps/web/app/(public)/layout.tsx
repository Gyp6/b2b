import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { type PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="">
      <Header />

      <main className="pt-40">{children}</main>

      <Footer />
    </div>
  );
}
