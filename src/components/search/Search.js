import "./style.scss";
import SeacrhSvg from "../../img/search-white.svg";
import { useRef } from "react";

const Search = ({ placeholder, maxWidth }) => {
  const inputRef = useRef();
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div class="header__search__wrapper">
      <label htmlFor="headersearch">
        <img
          src={SeacrhSvg}
          alt=""
          onClick={handleClick}
          onDragStart={(e) => e.preventDefault()}
        />
      </label>
      <input
        type="text"
        id="headersearch"
        placeholder={placeholder}
        ref={inputRef}
        className="bg2"
      />
    </div>
  );
};

export default Search;
