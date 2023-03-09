import React, { useRef } from "react";
import styles from "./Search.module.scss";
import { MdOutlineClear } from "react-icons/md";
import { SearchContext } from "../../App";
import debounce from 'lodash.debounce'

const Search = () => {
  const [value, setValue] = React.useState('')
  const { setSearchValue } = React.useContext(SearchContext);
  const inputEl = useRef(null);
  
  const onButtonClick = () => {
    setSearchValue('');
    setValue('')
    inputEl.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
    setSearchValue(str)
    }, 300),
    [],
  );

  const onchangeInput =  event => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        ref={inputEl}
        value={value}
        onChange={onchangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && <MdOutlineClear className={styles.clearSearch} onClick={() => onButtonClick()}/>}
    </div>
  );
};

export default Search;
