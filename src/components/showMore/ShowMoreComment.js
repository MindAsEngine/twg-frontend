import { useEffect, useState, useRef } from "react";
import "./showMore.scss";

const ShowMoreComment = (props) => {
  const [state, setState] = useState({
    button: true,
    showMore: false,
    textHeight: 0,
    strN: 0,
    transition: "0.7s",
  });

  const blockRef = useRef(null);
  const textDivRef = useRef(null);
  const [fontSize, setFontSize] = useState(18.5);

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
    <div className="showMore__comment">
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
                height: "40px",
                overflow: "hidden",
                transition: `height ${state.transition} ease`,
              }
        }
      >
        <div ref={textDivRef}>{props.content}</div>
      </p>
      <div className="flex justif-ss-end">
        <button
          onClick={() => {
            setState({ ...state, showMore: !state.showMore });
          }}
          className={
            state.showMore ? "opn flex showMore__btn" : " flex showMore__btn"
          }
        >
          {!state.showMore ? "Показать полностью..." : "Скрыть полностью"}
        </button>
      </div>
    </div>
  );
};

export default ShowMoreComment;
