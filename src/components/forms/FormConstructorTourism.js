import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import axios from "axios";
import './forms.scss'
import Collapsible from "react-collapsible";

function TextField({ title, name, handleFocusIn }) {
  // const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="form-row">
      <label htmlFor={ name }>{ title }</label>
      <div className="form-row__cols">
        <Field onClick={handleFocusIn} type="text" name={ name } id={ name } />
        <button className="form-row__showbtn">Показать</button>
      </div>
      <ErrorMessage name={ name }>{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
    </div> 
  )
}

const FormConstructor = () => {
  // определение поля, на котором фокус
  

  const handlePost = (values) => {

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
      <Collapsible trigger="Направление">
        <TextField name="destination-start-city" title="Город вылета" />
        <TextField name="destination-country" title="Страна" />
        <TextField name="destination-region" title="Регион" />
        <TextField name="destination-city" title="Город" />
      </Collapsible>

      <Collapsible trigger="Гостиница">
        <TextField name="hotel-start-city" title="Город вылета" />
        <TextField name="hotel-country" title="Страна" />
        <TextField name="hotel-region" title="Регион" />
        <TextField name="hotel-city" title="Город" />
      </Collapsible>

      <Collapsible trigger="Трансфер">
        <TextField name="transfer-start-city" title="Город вылета" />
        <TextField name="transfer-country" title="Страна" />
        <TextField name="transfer-region" title="Регион" />
        <TextField name="transfer-city" title="Город" />
      </Collapsible>
    </>
  );
};

export default FormConstructor;