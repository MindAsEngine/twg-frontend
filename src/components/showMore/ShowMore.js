import { useEffect, useState, useRef } from "react";

export const ShowMoreContent = (props) => {
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

  useEffect(() => {
    const handleHeightChange = () => {
      if (textDivRef.current) {
        const height = textDivRef.current.offsetHeight;
        console.log(height);
        setState({ ...state, textHeight: height });
      }
    };

    handleHeightChange(); // Вызываем при монтировании, чтобы получить начальное значение font-size
  }, [props.content]);
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
                height: "auto",
                overflow: "hidden",
                transition: `height ${state.transition} ease`,
              }
        }
      >
        <div ref={textDivRef}>{props.content}</div>
      </p>
      {state.textHeight > 50 ? (
        <button
          onClick={() => {
            setState({ ...state, showMore: !state.showMore });
          }}
          className={
            state.showMore ? "opn flex showMore__btn" : " flex showMore__btn"
          }
        >
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transition: `all ${state.transition} ease` }}
          >
            <path
              d="M13.7109 6.97168L7.71094 1.69833L1.71094 6.97168"
              stroke="rgba(0, 68, 120, 1)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {!state.showMore ? "Показать больше" : "Показать меньше"}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
