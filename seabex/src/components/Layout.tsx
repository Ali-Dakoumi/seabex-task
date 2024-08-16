import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl md:max-w-7xl mx-auto">{children}</div>;
}

export default Layout;
