import { useEffect, useState, useRef } from "react";
import ReactResizeDetector from "react-resize-detector";
import { useSelector } from "react-redux";

import "./news.scss";

import NewsImg from "../../img/newsImg.png";
import { ReactComponent as Show } from "../../img/show.svg";
import { ShowMoreNews } from "../showMore/ShowMoreNews";
import instance from "../../app/axiosClient";
import { ReactComponent as Hide } from "../../img/hidenEye.svg";

const News = ({ hideButton, handleCallback, index, visible }) => {
  const language = useSelector(
    (state) => state.persistantReducer.language.value
  );
  const [state, setState] = useState({
    newsList: [
      {
        img: null,
        title: "Заголовок новости пара строк",
        text: "Разрез гомогенно эволюционирует Разрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет ав зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.Разрез гомогенно эволюционирует Разрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет ав зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.Разрез гомогенно эволюционирует Разрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет ав зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.Разрез ым представлениям, увлажняет амфифииментальной проверке. Солеперенос пространственно перемещает песок.",
        date: "20 февраля 2024",
      },
      {
        img: NewsImg,
        title: "Заголовок новости пара строк",
        text: "Разрез гомогенно эволюционирует Разрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет аРазрез ым представлениям, увлажняет ав зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.",
        date: "20 февраля 2024",
      },
      {
        img: null,
        title: "Заголовок новости пара строк",
        text: "Разрез гомогенно эволюционирует в зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.",
        date: "20 февраля 2024",
      },
    ],
    //newsList: [],
    newsImgList: [],
    loading: false,
    counter: 3,
    textHeight: 0,
  });
  const [news, setNews] = useState([]);
  const [imgHeight, setiImgHeight] = useState([]);
  const blockRef = useRef(null);
  const textDivRef = useRef(null);
  const imgDivRef = useRef(null);
  const [fontSize, setFontSize] = useState(18.5);
  const [paddingTop, setPaddingTop] = useState();
  const [paddingBottom, setPaddingBottom] = useState();
  const [heightArray, setHeightArray] = useState([]);
  const [heightArray2, setHeightArray2] = useState([]);
  const handleResize = (entry, width, height) => {
    const paddingTop = window
      .getComputedStyle(blockRef.current)
      .getPropertyValue("padding-top");
    const paddingBottom = window
      .getComputedStyle(blockRef.current)
      .getPropertyValue("padding-bottom");
    setPaddingTop(paddingTop);
    setPaddingBottom(paddingBottom);
    setHeightArray((prevHeightArray) => {
      const newArray = [...prevHeightArray];
      newArray[entry] = height > 17 ? height : 200;
      return newArray;
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setState({ ...state, loading: true });
        const response = await instance.get(`/${language}/news`);
        setState({ ...state, loading: false });
        setNews(response);
      } catch (error) {
        setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  }, [state.limit, language]);

  useEffect(() => {
    const handleFontSizeChange = () => {
      if (blockRef.current) {
        const computedStyle = window.getComputedStyle(blockRef.current);
        const lineHeightValue = parseFloat(
          computedStyle.getPropertyValue("line-height")
        );
        setFontSize(lineHeightValue);
      }
    };

    handleFontSizeChange(); // Вызываем при монтировании, чтобы получить начальное значение font-size
    window.addEventListener("resize", handleFontSizeChange); // Добавляем слушатель на изменение размеров окна
    return () => {
      window.removeEventListener("resize", handleFontSizeChange); // Удаляем слушатель при размонтировании компонента
    };
  }, []);

  useEffect(() => {
    const handleHeightChange = () => {
      if (textDivRef.current) {
        const height = textDivRef.current.offsetHeight;
        setState({ ...state, textHeight: height });
      }
    };

    handleHeightChange(); // Вызываем при монтировании, чтобы получить начальное значение font-size
    window.addEventListener("resize", handleHeightChange); // Добавляем слушатель на изменение размеров окна
    return () => {
      window.removeEventListener("resize", handleHeightChange); // Удаляем слушатель при размонтировании компонента
    };
  }, []);
  return (
    <div className="home__news container m-centr">
      {hideButton ? (
        <button className="adm_editShow" onClick={() => handleCallback(index)}>
          {visible ? <Show /> : <Hide className="hide_svg" />}
        </button>
      ) : (
        <></>
      )}
      <div className="news__title fs40 fw400 Lh52">
        <p>Наши новости</p>
      </div>
      <ul className="news__list">
        {state.loading ? (
          <div className="news__loading"></div>
        ) : (
          state.newsList.slice(0, state.counter).map((el, i) => (
            <li className="item" id={i} key={i}>
              <div className="item__main flex">
                <div className="item__img">
                  <div className="news__item">
                    <img
                      src={el.img || "https://i.imgur.com/yVaa0la.png"}
                      alt=""
                      ref={imgDivRef}
                    />
                  </div>
                </div>
                <div className="item__text" ref={blockRef}>
                  <div className="text__title flex justif-ss-betw">
                    <p className="fw600 fs24 lh7 title__text">{el.title}</p>
                    <p className="fw400 fs16 lh18 title__date">{el.date}</p>
                  </div>

                  <div className="text__main fw400 fs24 lh27">
                    <ShowMoreNews
                      content={el.text}
                      i={i}
                      height={heightArray[i]}
                      height2={heightArray2[i]}
                      paddingTop={paddingTop}
                      paddingBottom={paddingBottom}
                      fontSize={fontSize}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default News;
