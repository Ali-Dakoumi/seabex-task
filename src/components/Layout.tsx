import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import SubHeader from "./SubHeader";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import MaxWidthWrapper from "./MaxWidthWrapper";

function Layout({ children }: { children: React.ReactNode }) {
  const cartItems = useSelector((state: RootState) => state?.cart?.items);

  return (
    <div className="">
      <MaxWidthWrapper>
        <SubHeader cartItems={cartItems} />
        <Header />
      </MaxWidthWrapper>
      <Breadcrumb />

      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </div>
  );
}

export default Layout;
