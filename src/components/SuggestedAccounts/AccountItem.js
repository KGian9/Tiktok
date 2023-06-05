import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview/AccountPreview";
import styles from "./SuggestedAccount.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        render={renderPreview}
        placement="bottom"
        offset={[-20, 0]}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1686067200&x-signature=n%2FfIwFjpWsXSr5xuXabw2I9ggUo%3D"
            alt="Tiin.vn"
          />

          <div className={cx("account-info")}>
            <p className={cx("nickname")}>
              <strong>tiin.vn</strong>
              <FontAwesomeIcon
                className={cx("blue-ticker")}
                icon={faCheckCircle}
              />
            </p>
            <p className={cx("name")}>Tiin.vn</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
