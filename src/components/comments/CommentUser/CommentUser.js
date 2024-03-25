import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import RatingComponent from "../../rating/Rating";
import axios from "axios";
import "./commentUser.scss";

const CommentUser = () => {
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
        setRating(0);
      } catch (error) {
        //setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  };
  return (
    <div className="comments__user flex">
      <div className="user__avatar">
        {/* <LazyLoadImage src={FeatureImg} className="avatar__img" /> */}
      </div>

      <div className="user__form">
        <div className="form__title">
          <p className="fw600 fs20 lh24">{avatar.name}</p>
        </div>
        <Formik
          initialValues={{ text: "", user: "lox" }} // Тут находятся наши изначальные состояния нашей формы
          onSubmit={(values, { setSubmitting }) => {
            handlePost(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, values }) => (
            <Form className="comments__form">
              <Field
                as="textarea"
                name="text"
                className="fw400 fs20 lh24"
                placeholder="Ваш отзыв"
              />
              <div className="flex justif-ss-betw">
                <RatingComponent onRatingChange={handleRatingChange} />
                <button
                  type="submit"
                  disabled={rating == 0 || isSubmitting}
                  className={`fw400 fs16 lh22 ${
                    values.text.length > 0 || rating > 0 ? "full" : ""
                  }`}
                >
                  Отправить
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CommentUser;
