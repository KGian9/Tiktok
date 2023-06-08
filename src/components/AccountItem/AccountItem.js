import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/:${data.uniqueId}`} className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src={data.avatarThumb}
        alt={data.nickname}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.nickname}</span>
          {data.tick && (
            <FontAwesomeIcon
              className={cx("blue-ticker")}
              icon={faCheckCircle}
            />
          )}
        </h4>
        <span className={cx("username")}>{data.uniqueId}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
