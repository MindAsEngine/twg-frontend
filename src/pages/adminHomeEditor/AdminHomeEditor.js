import { lazy, useEffect, useState } from "react";
import AuthorTours from "../../components/AuthorTours/AuthorTours";
import AboutUs from "../../components/aboutUs/AboutUs";
import Feature from "../../components/feature/Feature";
import News from "../../components/news/News";
import NoTur from "../../components/noTur/NoTur";
import Map from "../../components/map/Map";

import "./adminEdit.scss";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminHomeEditor = () => {
  const handleCallback = (el) => {
    handleSetVisibility(el);
  };

  let token = useSelector((state) => state.persistantReducer.token.value);
  token == "" ? (token = localStorage.token) : (token = token);

  const [state, setState] = useState({
    components: [
      {
        component: (i) => (
          <Map hideButton={true} handleCallback={handleCallback} index={i} />
        ),
        className: "",
      },
      {
        component: (i) => (
          <AboutUs
            hideButton={true}
            handleCallback={handleCallback}
            index={i}
          />
        ),
        className: "",
      },
      {
        component: (i) => (
          <AuthorTours
            hideButton={true}
            handleCallback={handleCallback}
            index={i}
          />
        ),
        className: "bg3",
      },
      {
        component: (i) => (
          <NoTur hideButton={true} handleCallback={handleCallback} index={i} />
        ),
        className: "bgGr",
      },
      {
        component: (i) => (
          <News hideButton={true} handleCallback={handleCallback} index={i} />
        ),
        className: "bgGr",
      },
    ],
  });
  // Получение массива всех видимых элементов
  // const [visibile, setVisible] = useState(
  //   Array(state.components.length).fill(true)
  // );
  const [visible, setVisible] = useState([
    {
      name: "MAP",
      visibility: true,
    },
    {
      name: "ABOUT_US",
      visibility: true,
    },
    {
      name: "AUTHOR_TOURS",
      visibility: true,
    },
    {
      name: "NO_TUR",
      visibility: true,
    },
    {
      name: "NEWS",
      visibility: true,
    },
  ]);
  const handleSetVisibility = (index) => {
    setVisible((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index].visibility = false;
      return newVisibility;
    });
  };

  //Функция для обнуления visibility false
  const handleResetVisibility = (index) => {
    setVisible((prevVisibility) => {
      return prevVisibility.map((el) => ({
        ...el,
        visibility: true,
      }));
    });
  };

  function postMainPageVisibility() {
    //Тут я преобразую наш state в норм body
    const transformedData = visible.reduce((acc, obj) => {
      acc[obj.name] = obj.visibility;
      return acc;
    }, {});
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    try {
      console.log(visible);
      //setState({ ...state, loading: true });
      const response = axios.put(
        "/admin/configs/visual/put",
        transformedData,
        config
      );
    } catch (error) {
      //setState({ ...state, loading: false });
      console.log(error);
    }
  }

  return (
    <>
      <section className="bgGr">
        <Feature />
      </section>
      {state.components.map((el, i) =>
        visible[i].visibility ? (
          <section className={el.className}>{el.component(i)}</section>
        ) : (
          <></>
        )
      )}
      {visible.some((e) => e.visibility === false) ? (
        <div className="container m-centr adminedit__btn flex">
          <button onClick={() => postMainPageVisibility()} className="bgYl">
            Сохранить изменения
          </button>
          <button onClick={() => handleResetVisibility()}>
            Отменить изменения
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminHomeEditor;
