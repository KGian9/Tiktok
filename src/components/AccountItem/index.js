import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8cc0691ea1d58db124be14a89ce3128f~c5_100x100.jpeg?x-expires=1684220400&x-signature=X6a41CN2Kkd1rHLb7%2FFsimMi%2F78%3D"
        alt="Giang"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Truong_K</span>
          <FontAwesomeIcon className={cx("blue-ticker")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>TruongKienGiang</span>
      </div>
    </div>
  );
}

export default AccountItem;
