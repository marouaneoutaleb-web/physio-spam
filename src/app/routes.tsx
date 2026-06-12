import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Appointment } from "./pages/Appointment";
import { Root } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "cabinet", Component: About },
      { path: "soins", Component: Services },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "rendez-vous", Component: Appointment },
    ],
  },
]);
