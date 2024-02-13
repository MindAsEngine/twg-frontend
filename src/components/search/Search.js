import "./style.scss";
import SeacrhSvg from "../../img/search.svg";

const Search = ({ placeholder, maxWidth }) => {
  return (
    <>
      <img
        src={SeacrhSvg}
        alt=""
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
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
          fontFamily: "inherit"
        }}
      />
    </>
  );
};

export default Search;
