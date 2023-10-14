import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages";
import LoginPage from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Dashboard from "../pages/user";
import ListsPage from "../pages/user/ListsPage";
import ListPage from "../pages/user/listPage";
import NotFoundPage from "../pages/404";
import CreatePage from "../pages/user/createForm";
import SettingsPage from "../pages/user/settings";
import MaintenancePage from "../pages/user/maintenancePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/app/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/app/cars",
    element: <ListsPage />,
  },
  {
    path: "/app/car/:carID",
    element: <ListPage />,
  },
  {
    path: "/app/car/:carID/:maintenanceId",
    element: <MaintenancePage />,
  },
  {
    path: "/app/car",
    element: <CreatePage />,
  },
  {
    path: "/app/settings",
    element: <SettingsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
]);
export default router;
