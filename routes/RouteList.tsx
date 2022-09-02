const RouteList = [
  {
    title: "Home",
    name: "home",
    path: "/",
    isAuth: true,
    isDashboardLayout: true,
  },
  {
    title: "Login",
    name: "login",
    path: "/auth/login",
    isAuth: false,
    isDashboardLayout: false,
  },
];

export default RouteList;
