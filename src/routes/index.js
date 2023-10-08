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
    path: "/app/waitlists",
    element: <ListsPage />,
  },
  {
    path: "/app/waitlist/:waitlistID",
    element: <ListPage />,
  },
  {
    path: "/app/waitlist",
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
