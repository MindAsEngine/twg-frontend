import { useEffect, useState, useRef } from "react";
import ReactResizeDetector from "react-resize-detector";

import "./news.scss";

import NewsImg from "../../img/newsImg.png";
import { ShowMoreNews } from "../showMore/ShowMoreNews";

const News = () => {
  const [state, setState] = useState({
    newsList: [
      {
        img: NewsImg,
        title: "Заголовок новости пара строк",
        text: "Разрез гомогенно эволюционирует в зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.",
        date: "20 февраля 2024",
      },
      {
        img: NewsImg,
        title: "Заголовок новости пара строк",
        text: "Разрез гомогенно эволюционирует в зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.",
        date: "20 февраля 2024",
      },
      {
        img: NewsImg,
        title: "Заголовок новости пара строк",
        text: "Разрез гомогенно эволюционирует в зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.",
        date: "20 февраля 2024",
      },
      {
        img: NewsImg,
        title: "Заголовок новости пара строк",
        text: "Разрез гомогенно эволюционирует в зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.",
        date: "20 февраля 2024",
      },
      {
        img: NewsImg,
        title: "Заголовок новости пара строк",
        text: "Разрез гомогенно эволюционирует в зоогенный минерал. Однако, при увеличении выборки набухание поглощает гистерезис ОГХ, однозначно свидетельствуя о неустойчивости процесса в целом. Суглинок, согласно традиционным представлениям, увлажняет амфифильный глей. Профиль концентрирует биокосный желтозём, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Солеперенос пространственно перемещает песок.",
        date: "20 февраля 2024",
      },
    ],
    newsImgList: [],
    loading: false,
    counter: 3,
    textHeight: 0,
  });
  const blockRef = useRef(null);
  const textDivRef = useRef(null);
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

  const handleResize2 = (entry, width2, height2) => {
    setHeightArray2((prevHeightArray) => {
      const newArray = [...prevHeightArray];
      newArray[entry] = height2 > 17 ? height2 : 200;
      return newArray;
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setState({ ...state, loading: true });
        //const response = await axios.get(baseURL + "/news", {});
        setState({ ...state, loading: false });
        //setState({ ...state, newsList: response.data });
      } catch (error) {
        setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  }, [state.limit]);

  useEffect(() => {
    const handleFontSizeChange = () => {
      if (blockRef.current) {
        const computedStyle = window.getComputedStyle(blockRef.current);
        const fontSizeValue = parseFloat(
          computedStyle.getPropertyValue("line-height")
        );
        setFontSize(fontSizeValue);
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
      <div className="news__title fs40 fw400 Lh52">
        <p>Наши новости</p>
      </div>
      <ul className="news__list">
        {state.loading ? (
          <div className="news__loading"></div>
        ) : (
          state.newsList.slice(0, state.counter).map((el, i) => (
            <li className="item" id={i}>
              <div className="item__main flex">
                <div className="item__img">
                  <ReactResizeDetector
                    handleWidth
                    handleHeight
                    onResize={(width, height) => handleResize(i, width, height)}
                  >
                    <div className="news__item">
                      <img src={el.img} alt="" />
                    </div>
                  </ReactResizeDetector>
                </div>
                <div className="item__text" ref={blockRef}>
                  <ReactResizeDetector
                    handleWidth
                    handleHeight
                    onResize={(width, height) =>
                      handleResize2(i, width, height)
                    }
                  >
                    <div className="text__title flex justif-ss-betw">
                      <p className="fw600 fs24 lh7 title__text">{el.title}</p>
                      <p className="fw400 fs16 lh18 title__date">{el.date}</p>
                    </div>
                  </ReactResizeDetector>

                  <div className="text__main fw400 fs24 lh27">
                    <ShowMoreNews
                      content={el.text}
                      i={i}
                      height={heightArray[i]}
                      height2={heightArray2[i]}
                      paddingTop={paddingTop}
                      paddingBottom={paddingBottom}
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
