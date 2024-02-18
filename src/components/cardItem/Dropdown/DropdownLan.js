import Dropdown from "react-dropdown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeLanguage } from "../../../store/slices/Language";
import "../Dropdown/dropdownH.scss";

export const DropdownLg = () => {
  const [state, setState] = useState({
    language: "RU",
  });
  const dispatch = useDispatch();

  const options = ["RU", "EN", "UZ"];
  const defaultOption = options[0];
  const handleOption = (e) => {
    setState({ ...state, language: e.target });
    dispatch(changeLanguage(e.value));
  };
  return (
    <>
      <Dropdown
        className="dropdown"
        id="details__dropdown"
        options={options}
        value={defaultOption}
        onChange={handleOption}
      />
    </>
  );
};
