import React from "react";
import { Field, ErrorMessage } from "formik";
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
    <>
      <Collapsible trigger="Направление" open>
        <div className="form-row">
        <label htmlFor="destination-start-city">Город вылета</label>
          <Field type="text" name="destination-start-city" id="destination-start-city" />
          <ErrorMessage name="destination-start-city">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="destination-country">Страна</label>
          <Field type="text" name="destination-country" id="destination-country" />
          <ErrorMessage name="destination-country">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="destination-region">Регион</label>
          <Field type="text" name="destination-region" id="destination-region" />
          <ErrorMessage name="destination-region">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="destination-city">Город</label>
          <Field type="text" name="destination-city" id="destination-city" />
          <ErrorMessage name="destination-city">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
      </Collapsible>

      <Collapsible trigger="Гостиница" open>
        <div className="form-row">
          <label htmlFor="hotel-start-city">Город вылета</label>
          <Field type="text" name="hotel-start-city" id="hotel-start-city" />
          <ErrorMessage name="hotel-start-city">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="hotel-country">Страна</label>
          <Field type="text" name="hotel-country" id="hotel-country" />
          <ErrorMessage name="hotel-country">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="hotel-region">Регион</label>
          <Field type="text" name="hotel-region" id="hotel-region" />
          <ErrorMessage name="hotel-region">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="hotel-city">Город</label>
          <Field type="text" name="hotel-city" id="hotel-city" />
          <ErrorMessage name="hotel-city">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
      </Collapsible>

      <Collapsible trigger="Трансфер" open>
        <div className="form-row">
          <label htmlFor="transfer-start-city">Город вылета</label>
          <Field type="text" name="transfer-start-city" id="transfer-start-city" />
          <ErrorMessage name="transfer-start-city">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="transfer-country">Страна</label>
          <Field type="text" name="transfer-country" id="transfer-country" />
          <ErrorMessage name="transfer-country">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="transfer-region">Регион</label>
          <Field type="text" name="transfer-region" id="transfer-region" />
          <ErrorMessage name="transfer-region">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-row">
          <label htmlFor="transfer-city">Город</label>
          <Field type="text" name="transfer-city" id="transfer-city" />
          <ErrorMessage name="transfer-city">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
        </div>
      </Collapsible>
    </>
  );
};

export default FormConstructor;