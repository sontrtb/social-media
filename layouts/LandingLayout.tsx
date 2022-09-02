import React from "react";

interface LandingLayoutProps {
  children: React.ReactNode;
}

function LandingLayout({ children }: LandingLayoutProps) {
  return <div>{children}</div>;
}

export default LandingLayout;
