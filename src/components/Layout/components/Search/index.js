import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import HeadlessTippy from "@tippyjs/react/headless";

import { ClearIcon, LoadingIcon, SearchIcon } from "~/components/Icons";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounced
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchResult([]);
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <HeadlessTippy
      content="Tìm Kiếm"
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <ClearIcon />
          </button>
        )}

        {loading && <LoadingIcon className={cx("loading")} />}

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
