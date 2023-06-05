import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1686067200&x-signature=n%2FfIwFjpWsXSr5xuXabw2I9ggUo%3D"
          alt="Tiin.vn"
        />
        <div>
          <Button className={cx("follow-btn")} primary>
            Follow
          </Button>
        </div>
      </header>

      <section className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>tiin.vn</strong>
          <FontAwesomeIcon className={cx("blue-ticker")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Tiin.vn</p>
      </section>

      <footer className={cx("analytics")}>
        <strong className={cx("follower")}>8.5M </strong>
        <span className={cx("label")}>Followers </span>
        <strong className={cx("liked")}>548.1M </strong>
        <span className={cx("label")}>Likes </span>
      </footer>
    </div>
  );
}

export default AccountPreview;
