import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SuggestedAccount.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx("see-all")}>See all</p>
    </div>
  );
}

SuggestedAccounts.protoType = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
