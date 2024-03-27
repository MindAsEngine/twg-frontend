import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

export const ShowMoreNews = (props) => {
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
  // useEffect(() => {
  //   const handleHeightChange = () => {
  //     if (textDivRef.current) {
  //       const height = textDivRef.current.offsetHeight;
  //       setState({ ...state, textHeight: height });
  //     }
  //   };

  //   handleHeightChange();
  //   const computedStyle = window.getComputedStyle(textDivRef.current);
  //   const lineHeightValue = parseFloat(
  //     computedStyle.getPropertyValue("line-height")
  //   );
  //   setFontSize(lineHeightValue);
  // }, []);
  return (
    // <>
    //   <p
    //     ref={blockRef}
    //     className="content__text"
    //     style={
    //       state.showMore
    //         ? {
    //             height: `${state.textHeight}px`,
    //             overflow: "hidden",
    //             transition: `height ${state.transition} ease`,
    //           }
    //         : {
    //             //42 - это значение высоты кнопки Показать все + margin-top
    //             height:
    //               Math.round(
    //                 props.height * 0.67 - parseInt(props.paddingBottom) - 34
    //               ) + "px",
    //             overflow: "hidden",
    //             transition: `height ${state.transition} ease`,
    //           }
    //     }
    //   >
    //     <div ref={textDivRef}>{props.content}</div>
    //   </p>
    //   {state.textHeight > props.height ? (
    //     <>
    //       <div
    //         className="flex showMore__btn"
    //         style={{ justifyContent: "end", marginTop: "15px" }}
    //       >
    //         <button
    //           onClick={() => {
    //             blockRef.current.style.height = "100%";
    //             setState({ ...state, showMore: !state.showMore });
    //           }}
    //         >
    //           {!state.showMore ? (
    //             "Показать всю новость"
    //           ) : (
    //             <Link
    //               to={state.index}
    //               spy={true}
    //               smooth={true}
    //               offset={-70}
    //               duration={700}
    //               onClick={() => {
    //                 setState({ ...state, showMore: !state.showMore });
    //               }}
    //             >
    //               Скрыть новость
    //             </Link>
    //           )}
    //         </button>
    //       </div>
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </>
    <ShowMoreText
      /* Default options */
      lines={4}
      more="Показать больше"
      less="Показать меньше"
      className="content-css"
      anchorClass="show-more-less-clickable"
      expanded={false}
      truncatedEndingComponent={"... "}
    >
      {props.content}
    </ShowMoreText>
  );
};
