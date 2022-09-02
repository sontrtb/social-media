import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Content from "./Content";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
