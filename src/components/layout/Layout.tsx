import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-20 md:pb-8">
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Layout;
