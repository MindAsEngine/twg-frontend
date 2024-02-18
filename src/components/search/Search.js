import "./style.scss";
import SeacrhSvg from "../../img/search-white.svg";

const Search = ({ placeholder, maxWidth }) => {
  return (
    <>
      <img
        src={SeacrhSvg}
        alt=""
        style={{
          position: "absolute",
          top: "10px",
          left: "80%",
          bottom: "13px",
        }}
      />
      <input
        type="text"
        placeholder={placeholder}
        style={{
          borderRadius: "63px",
          padding: "10px 10px 10px 46px",
          fontSize: "20px",
          width: "100%",
          fontFamily: "inherit",
          backgroundColor: 'rgba(0, 28, 34, 1)',
          maxWidth: maxWidth,
          color:"rgba(255, 255, 255, 1)"
        }}
      />
    </>
  );
};

export default Search;
