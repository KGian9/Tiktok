import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {
  CoinsIcon,
  HelpIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  NotiIcon,
  SettingIcon,
  ShortKeyIcon,
  ThemeModeIcon,
  UploadIcon,
  UserIcon,
} from "~/components/Icons";

import config from "~/config/index.js";
import Button from "~/components/Button";
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css";
import Image from "~/components/Image";
import Images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import Search from "../Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: "Tiếng Việt",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <HelpIcon />,
    title: "Báo cáo và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <ShortKeyIcon />,
    title: "Phím tắt",
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // todo something
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <UserIcon />,
      title: "Trang cá nhân",
      to: "/@truongkgiang",
    },
    {
      icon: <CoinsIcon />,
      title: "Nhận xu",
      to: "/coins",
    },
    {
      icon: <SettingIcon />,
      title: "Cài đặt",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <ThemeModeIcon />,
      title: "Chế độ tối",
    },
    {
      icon: <LogoutIcon />,
      title: "Đăng Xuất",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={config.routes.home}>
            <img src={Images.logo} alt="Tiktok" />
          </Link>
        </div>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy content="Đăng Video">
                <Button upload href="/upload">
                  <UploadIcon styles={{ marginRight: 6 + "px" }} />
                  <p>Tải Lên</p>
                </Button>
              </Tippy>

              <Tippy placement="bottom" content="Tin nhắn">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy placement="bottom" content="Thông Báo">
                <button className={cx("action-btn")}>
                  <NotiIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8cc0691ea1d58db124be14a89ce3128f~c5_100x100.jpeg?x-expires=1684220400&x-signature=X6a41CN2Kkd1rHLb7%2FFsimMi%2F78%3D"
                alt="Trương Kiên Giang"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
