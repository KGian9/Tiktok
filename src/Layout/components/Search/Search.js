import classNames from "classnames/bind";
import AccountItem from "~/components/AccountItem";
import { useEffect, useState, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import { useDebounce } from "~/hooks";
import styles from "./Search.module.scss";
import * as searchServices from "~/Services/searchServices";
import { ClearIcon, LoadingIcon, SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debouncedValue);

      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchResult([]);
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  // (e) => setSearchValue(e.target.value)
  return (
    // Tippy error
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
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
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <ClearIcon />
            </button>
          )}

          {loading && <LoadingIcon className={cx("loading")} />}

          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
