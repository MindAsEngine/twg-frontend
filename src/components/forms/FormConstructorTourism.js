import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import './forms.scss'
import Collapsible from "react-collapsible";

const FormConstructor = () => {
  const handlePost = (values) => {
    const formData = new FormData();

    async function fetchData() {
      try {
        //setState({ ...state, loading: true });
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos"
        );
      } catch (error) {
        //setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }} // Тут находятся наши изначальные состояния нашей формы
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handlePost(values); 
          setSubmitting(false); 
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Collapsible trigger="Направление" open>
              <div className="form-row">
                <label for="destination-start-city">Город вылета</label>
                <Field type="text" name="destination-start-city" id="destination-start-city" />
              </div>
              <div className="form-row">
                <label for="destination-country">Страна</label>
                <Field type="text" name="destination-country" id="destination-country" />
              </div>
              <div className="form-row">
                <label for="destination-region">Регион</label>
                <Field type="text" name="destination-region" id="destination-region" />
              </div>
              <div className="form-row">
                <label for="destination-city">Город</label>
                <Field type="text" name="destination-city" id="destination-city" />
              </div>
            </Collapsible>

            <Collapsible trigger="Гостиница" open>
              <div className="form-row">
                <label for="hotel-start-city">Город вылета</label>
                <Field type="text" name="hotel-start-city" id="hotel-start-city" />
              </div>
              <div className="form-row">
                <label for="hotel-country">Страна</label>
                <Field type="text" name="hotel-country" id="hotel-country" />
              </div>
              <div className="form-row">
                <label for="hotel-region">Регион</label>
                <Field type="text" name="hotel-region" id="hotel-region" />
              </div>
              <div className="form-row">
                <label for="hotel-city">Город</label>
                <Field type="text" name="hotel-city" id="hotel-city" />
              </div>
            </Collapsible>

            <Collapsible trigger="Трансфер" open>
              <div className="form-row">
                <label for="transfer-start-city">Город вылета</label>
                <Field type="text" name="transfer-start-city" id="transfer-start-city" />
              </div>
              <div className="form-row">
                <label for="transfer-country">Страна</label>
                <Field type="text" name="transfer-country" id="transfer-country" />
              </div>
              <div className="form-row">
                <label for="transfer-region">Регион</label>
                <Field type="text" name="transfer-region" id="transfer-region" />
              </div>
              <div className="form-row">
                <label for="transfer-city">Город</label>
                <Field type="text" name="transfer-city" id="transfer-city" />
              </div>
            </Collapsible>


            {/* <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>  */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormConstructor;