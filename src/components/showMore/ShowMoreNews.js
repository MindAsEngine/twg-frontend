import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export const ShowMoreNews = (props) => {
  console.log(props);
  const [state, setState] = useState({
    button: true,
    showMore: false,
    textHeight: 0,
    strN: 0,
    height: "100px",
    transition: "0.7s",
  });

  const blockRef = useRef(null);
  const textDivRef = useRef(null);
  const [fontSize, setFontSize] = useState(18.5);

  // state.height > 54 ? console.log('opa') : console.log('more');
  useEffect(() => {
    const handleHeightChange = () => {
      if (textDivRef.current) {
        const height = textDivRef.current.offsetHeight;
        setState({ ...state, textHeight: height });
      }
    };

    handleHeightChange(); // Вызываем при монтировании, чтобы получить начальное значение font-size
  }, []);
  return (
    <>
      <p
        ref={blockRef}
        className="content__text"
        style={
          state.showMore
            ? {
                height: `${state.textHeight}px`,
                overflow: "hidden",
                transition: `height ${state.transition} ease`,
              }
            : {
                height:
                  Math.round((props.height - props.height2) / fontSize - 3) *
                    fontSize +
                  "px",
                overflow: "hidden",
                transition: `height ${state.transition} ease`,
              }
        }
      >
        <div ref={textDivRef}>{props.content}</div>
      </p>
      {state.textHeight > Math.round(props.height / fontSize - 2) * fontSize &&
      state.textHeight > props.height ? (
        <>
          <div
            className="flex showMore__btn"
            style={{ justifyContent: "end", marginTop: "15px" }}
          >
            <button
              onClick={() => {
                blockRef.current.style.height = "100%";
                setState({ ...state, showMore: !state.showMore });
              }}
            >
              {!state.showMore ? (
                "Показать всю новость"
              ) : (
                <Link
                  to={state.index}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  onClick={() => {
                    setState({ ...state, showMore: !state.showMore });
                  }}
                >
                  Скрыть новость
                </Link>
              )}
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
