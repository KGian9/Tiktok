import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SuggestedAccount.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1686067200&x-signature=n%2FfIwFjpWsXSr5xuXabw2I9ggUo%3D"
        alt="Tiin.vn"
      />

      <div className={cx("account-info")}>
        <p className={cx("nickname")}>
          <strong>tiin.vn</strong>
          <FontAwesomeIcon className={cx("blue-ticker")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Tiin.vn</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
