import classNames from "classnames/bind";

import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import {
  HomeIcon,
  HomeIconActive,
  FollowingIcon,
  FollowingIconActive,
  ExploreIcon,
  ExploreIconActive,
  LiveIcon,
  LiveIconActive,
} from "~/components/Icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeIconActive />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<FollowingIcon />}
          activeIcon={<FollowingIconActive />}
        />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreIconActive />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveIconActive />}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
