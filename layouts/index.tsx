import React from "react";
import DashboardLayout from "./DashboardLayout";
import LandingLayout from "./LandingLayout";
import RouteList from "../routes/RouteList";
import { useRouter } from "next/router";
import { useAppSelector } from "@app/hooks";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const user = useAppSelector((state) => state.user);

  const routerInfor = () => {
    const res = RouteList.filter((item) => item.path === router.pathname);
    if (res.length > 0) return res[0];
    return null;
  };

  if (routerInfor()?.isAuth) {
    if (!user.token) {
      router.push("auth/login");
    }
  }

  if (routerInfor()?.isDashboardLayout) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  if (!routerInfor()?.isDashboardLayout) {
    <LandingLayout>{children}</LandingLayout>;
  }

  return <LandingLayout>{children}</LandingLayout>;
}

export default Layout;
