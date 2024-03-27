import { lazy, useEffect, useState } from "react";
import AuthorTours from "../../components/AuthorTours/AuthorTours";
import AboutUs from "../../components/aboutUs/AboutUs";
import Feature from "../../components/feature/Feature";
import News from "../../components/news/News";
import NoTur from "../../components/noTur/NoTur";

import "./adminEdit.scss";

import { ReactComponent as Show } from "../../img/show.svg";
const Map = lazy(() => import("../../components/map/Map"));



const AdminHomeEditor = () => {
  const [state, setState] = useState({
    components: [
      { component: <Map />, className: "" },
      { component: <AboutUs />, className: "" },
      { component: <AuthorTours />, className: "bg3" },
      { component: <NoTur />, className: "bgGr" },
      { component: <News />, className: "bgGr" },
    ],
  });
  // Получение массива всех видимых элементов
  const [visibile, setVisible] = useState(
    Array(state.components.length).fill(1)
  );
  const handleSetVisibility = (index) => {
    setVisible((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = 0;
      return newVisibility;
    });
  };
  return (
    <>
      <section className="bgGr">
        <Feature />
      </section>
      {state.components.map((el, i) =>
        visibile[i] == 1 ? (
          <section className={el.className}>
            <Show
              className="adm_editShow"
              onClick={() => handleSetVisibility(i)}
            />
            {el.component }
          </section>
        ) : (
          <></>
        )
      )}
      {visibile.includes(0) ? <button>Сохранить</button> : <></>}
    </>
  );
};

export default AdminHomeEditor;
