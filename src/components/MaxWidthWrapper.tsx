import React from "react";

function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-8 md:px-0 md:max-w-7xl mx-auto poppins-medium">
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
