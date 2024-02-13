import "./style.scss";
import SearchSvg from "../../img/search-white.svg";

export default function Search() {
    return (
        <button className="search__mini">
            <img
                src={SearchSvg}
                alt=""
                style={{
                    stroke: 'white'
                }}
            />
        </button>
    )
}