import sortArrow from "../../img/sortArrow.svg";
import axios from "axios";
import "./style.scss";
import RatingComponent from "../rating/Rating";
import { useState, useEffect, useRef } from "react";
import PaginatedItems from "./commentsPages/CommentsPagesNum";
import CommentUser from "./CommentUser/CommentUser";
import { useSelector } from "react-redux";

const Comments = ({ hideButton }) => {
  const userState = useSelector((el) => el.persistantReducer.user);
  const avatar = { img: "", name: "Имя Фамилия" };

  const [state, setState] = useState({
    rating: 0,
    comment: "",
  });
  const [rating, setRating] = useState(0);
  const handleRatingChange = (rating) => {
    // Вызываем коллбэк из Formik, передавая новое значение рейтинга
    setRating(rating);
  };
  const [sort, setSort] = useState(false);
  const handlePost = (values) => {
    values.stars = rating;
    if (rating == 0) {
      return false;
    }
    const formData = new FormData();
    async function fetchData() {
      try {
        //setState({ ...state, loading: true });
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          values
        );
      } catch (error) {
        //setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  };

  const orderButton = useRef();
  const firstBefore = useRef();

  const [bottomStyle, setBottomStyle] = useState(0);

  useEffect(() => {
    if (userState.name !== null) {
      const handleScroll = () => {
        const footer = document.querySelector("footer");

        const blockVisibility = footer.getBoundingClientRect();

        const windowHeight = window.innerHeight;
        const blockTop = blockVisibility.top;
        const blockBottom = blockVisibility.bottom;

        const visibleHeight =
          Math.min(blockBottom, windowHeight) - Math.max(blockTop, 0);

        if (visibleHeight > 15) {
          // Тут проверка на сколько пикселей торчит footer
          orderButton.current.classList.add("static");
          firstBefore.current.classList.add("static");
        } else {
          orderButton.current.classList.remove("static");
          firstBefore.current.classList.remove("static");
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      };
    }
  }, []);
  return (
    <section id="comments">
      <div className="tur__comments container m-centr pd">
        <div className="comments__title flex justif-ss-betw">
          <p className="fw600 fs24 lh30">Отзывы</p>
          <div className="comments__stars">
            <RatingComponent
              ratingNumber={60}
              ratingAverage={3.5}
              readonly={true}
            />
          </div>
        </div>
        <div className="comments__body">
          {userState.name !== null ? <CommentUser /> : <></>}

          <div className="comments__sort flex justif-ss-end">
            <button className={sort ? "filtred" : ""}>
              {sort ? `по убыванию` : "по возрастанию"}
              <img src={sortArrow} alt="" />
            </button>
          </div>
          <div className="comments__list"></div>
          <div className="comments__pages" ref={firstBefore}>
            <PaginatedItems itemsPerPage={3} />
          </div>
          {userState.name !== null ? (
            <div
              className="comment__order flex justif-ss-cent"
              ref={orderButton}
            >
              {hideButton ? (
                <> </>
              ) : (
                <button
                  className="fw700 fs24 lh32 bgYl"
                  style={{ bottom: bottomStyle }}
                >
                  Заказать тур
                </button>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comments;
