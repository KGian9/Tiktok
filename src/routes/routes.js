import config from "~/config";
//Layout
import { HeaderOnly } from "~/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from "~/pages/Live";
import Explore from "~/pages/Explore";

//todo public routes
const publicRoutes = [
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.explore, component: Explore },
  { path: config.routes.live, component: Live },
];

//todo private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
