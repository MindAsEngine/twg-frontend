import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const FormCallback = () => {
  const [state, setState] = useState({
    phone: "",
    name: "",
    loading: false,
  });
  const handlePost = (values) => {
    const formData = new FormData();
    async function fetchData() {
      try {
        setState({ ...state, loading: true });
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setState({ ...state, loading: false });
      } catch (error) {
        setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  };
  return (
    <>
      {state.loading ? (
        <div className="loading__wrapper">
          <div className="loading"></div>
        </div>
      ) : (
        <></>
      )}

      <Formik
        initialValues={{ phone: "", name: "" }}
        onSubmit={(values, { setSubmitting }) => {
          handlePost(values);
          setSubmitting(false);
        }}
      >
        {({
          isSubmitting,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form>
            <div className="form__input">
              <label htmlFor="phone" className="fw400 fs20">
                Номер телефона
              </label>
              <Field type="number" name="phone" min="0" max="99999999999" />
            </div>
            <div className="form__input">
              <label htmlFor="name" className="fw400 fs20">
                ФИО
              </label>
              <Field type="text" name="name" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`fw400 fs20 m-centr f-cGr ${
                values.name.length && values.phone.length != 0 ? "full" : ""
              }`}
            >
              Получить персональное предложение
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormCallback;
