// `createBrowserRouter` works great for local SPA navigation, but when
// you deploy to a static host like Vercel and refresh on a nested URL you
// get a 404 because the server tries to resolve `/about` as a real file.  To
// avoid the rewrite configuration you can use a hash router instead.  If you
// prefer to keep browser-routing you can add a `vercel.json` rewrite (see
// project root) or configure your server to always serve `index.html`.

import { createHashRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Process } from "./pages/Process";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "portfolio", Component: Portfolio },
      { path: "process", Component: Process },
      { path: "contact", Component: Contact },
    ],
  },
]);
