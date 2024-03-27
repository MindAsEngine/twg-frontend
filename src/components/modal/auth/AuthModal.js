import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../../store/slices/User";

import "../../forms/forms.scss";
import "./AuthModal.scss";

import ChevronIcon from "../../../img/chevron-left.svg";
import instance from "../../../app/axiosClient";
import { useNavigate } from "react-router-dom";
import { changeToken } from "../../../store/slices/Token";
import { values } from "lodash";

// Вход
function LoginUser({ switchTab }) {
  const formInitialValues = {
    username: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handlePost = (values) => {
    async function fetchData() {
      try {
        //setState({ ...state, loading: true });
        const response = await instance.post("/auth/users/sign-in", values, {
          headers: {},
        });

        dispatch(getUser(values));
        dispatch(changeToken(response.data.token));
        //Обновление страницы после получения данных в redux
        window.location.reload();
      } catch (error) {
        //setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  };
  return (
    <>
      <div className="signup__header">
        <h2>Вход</h2>
        <button onClick={() => switchTab(2)}>Я агент</button>
      </div>

      <Formik
        className="signup__form"
        initialValues={formInitialValues}
        validate={(values) => {
          const errors = {};
          for (let key of Object.keys(formInitialValues)) {
            if (!values[key]) {
              errors[key] = "Требуется заполнить";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handlePost(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="form-row">
              <label htmlFor="login">Логин или номер телефона</label>
              <Field type="text" name="username" id="username" />
              <ErrorMessage name="username">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="password">Пароль</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <button type="button" className="forgot-password">
              Забыли пароль?
            </button>

            <button
              className={`btn primarybtn ${(values.username.trim().length > 0 && values.password.trim().length > 0) ? 'full' : ''}`}
              disabled={!values.username.trim() || !values.password.trim()}
            >
              Войти
            </button>
          </Form>
        )}
      </Formik>
      <div className="separator">или</div>

      <button className="btn primarybtn" onClick={() => switchTab(1)}>
        Зарегистрироваться
      </button>
      <button className="btn" onClick={() => switchTab(3)}>
        Стать агентом
      </button>
    </>
  );
}

// Регистрация
function SignupUser({ switchTab }) {
  const formInitialValues = {
    phone: "",
    firstName: "",
    password: "",
    email: "",
    lastName: "",
    patronymic: "",
    username: "",
  };

  const dispatch = useDispatch();

  const handlePost = (values) => {
    async function fetchData() {
      try {
        //setState({ ...state, loading: true });
        const response = await instance.post("/auth/users/sign-up", values);

        dispatch(getUser(values));
        localStorage.setItem("token", response.data.token);
        window.location.reload();
      } catch (error) {
        //setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  };

  return (
    <>
      <div className="signup__header">
        <h2>Регистрация</h2>
        <button onClick={() => switchTab(0)}>
          <img src={ChevronIcon} style={{ height: "16px" }} />
        </button>
      </div>

      <Formik
        className="signup__form"
        initialValues={formInitialValues}
        validate={(values) => {
          const errors = {};
          for (let key of Object.keys(formInitialValues)) {
            if (!values[key]) {
              errors[key] = "Требуется заполнить";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handlePost(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="form-row">
              <label htmlFor="phone">Номер телефона</label>
              <Field type="text" name="phone" id="phone" />
              <ErrorMessage name="phone">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="email">Логин</label>
              <Field type="text" name="email" id="email" />
              <ErrorMessage name="email">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="password">Пароль</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="firstName">Ваше имя</label>
              <Field type="text" name="firstName" id="password2" />
              <ErrorMessage name="firstName">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="lastName">Ваша фамилия</label>
              <Field type="text" name="lastName" id="lastName" />
              <ErrorMessage name="lastName">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="username">Имя пользователя</label>
              <Field type="text" name="username" id="username" />
              <ErrorMessage name="username">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="patronymic">Ваше отчество</label>
              <Field type="text" name="patronymic" id="patronymic" />
              <ErrorMessage name="patronymic">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-row">
              <label>
                <Field type="checkbox" name="agreement" id="agreement" />
                <span style={{ fontSize: "13px" }}>
                  Я даю согласие на обработку моих персональных данных
                </span>
              </label>
              <ErrorMessage name="agreement">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <button style={{ marginTop: "24px" }}
              className={`btn primarybtn
              ${(values.firstName.trim().length > 0 && values.lastName.trim().length > 0) &&
                values.patronymic.trim().length > 0 && values.password.trim().length > 0 &&
                values.email.trim().length > 0 && values.username.trim().length > 0 &&
                values.phone.trim().length > 0 ? 'full' : ''}
              `}
              disabled={!values.firstName.trim() || !values.lastName.trim() || !values.patronymic.trim() ||
                !values.password.trim() || !values.email.trim() || !values.username.trim() || !values.phone.trim() }
            >
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

function SignupUserStep2() {}

// войти как агент
function LoginAgent({ switchTab }) {
  const formInitialValues = {
    key: "",
    password: "",
  };

  return (
    <>
      <div className="signup__header">
        <h2>Войти как агент</h2>
        <button onClick={() => switchTab(0)}>
          <img src={ChevronIcon} style={{ height: "16px" }} />
        </button>
      </div>

      <Formik
        className="signup__form"
        initialValues={formInitialValues}
        validate={(values) => {
          const errors = {};
          for (let key of Object.keys(formInitialValues)) {
            if (!values[key]) {
              errors[key] = "Требуется заполнить";
            }
          }
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-row">
              <label htmlFor="key">Ключ</label>
              <Field type="text" name="key" id="key" />
              <ErrorMessage name="key">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="password">Пароль</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <button className="forgot-password">Забыли пароль?</button>

            <button className="btn primarybtn" style={{ marginTop: "48px" }}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

// стать агентом
function SignupAgent({ switchTab }) {
  const formInitialValues = {
    name: "",
    phone: "",
    discovery: "",
    agreement: "",
  };

  return (
    <>
      <div className="signup__header">
        <h2>Регистрация</h2>
        <button onClick={() => switchTab(0)}>
          <img src={ChevronIcon} style={{ height: "16px" }} />
        </button>
      </div>

      <Formik
        className="signup__form"
        initialValues={formInitialValues}
        validate={(values) => {
          const errors = {};
          for (let key of Object.keys(formInitialValues)) {
            if (!values[key]) {
              errors[key] = "Требуется заполнить";
            }
          }
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-row">
              <label htmlFor="name">ФИО</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="phone">Номер телефона</label>
              <Field type="text" name="phone" id="phone" />
              <ErrorMessage name="phone">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-row">
              <label htmlFor="discovery">Как вы узнали о нас?</label>
              <Field type="text" name="discovery" id="discovery" />
              <ErrorMessage name="discovery">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-row">
              <label>
                <Field type="checkbox" name="agreement" id="agreement" />
                <span style={{ fontSize: "13px" }}>
                  {" "}
                  Я даю согласие на обработку моих персональных данных
                </span>
              </label>
              <ErrorMessage name="agreement">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-row">
              <label>Документы</label>
              <p className="form-row__description">
                Прикрепите документ, подтверждающий, что вы являетесь агентом, в
                формате PDF
              </p>
              <label className="fileinput" htmlFor="documents">
                <Field type="file" name="documents" id="documents" />
              </label>
              <ErrorMessage name="dicovery">
                {(msg) => <div className="form-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <button className="btn primarybtn" style={{ marginTop: "24px" }}>
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default function ModalAuthComponent({
  show,
  initTab,
  onClose,
  onAfterClose,
}) {
  const [tab, setTab] = useState(initTab);

  useEffect(() => {
    setTab(initTab);
  }, [initTab]);

  return (
    <Modal
      ariaHideApp={false}
      closeTimeoutMS={500}
      isOpen={show}
      onRequestClose={onClose}
      onAfterClose={onAfterClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "10",
        },
        content: {
          width: "100%",
          maxWidth: "512px",
          maxHeight: "max-content",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className="signup">
        {tab === 0 && <LoginUser switchTab={(i) => setTab(i)} />}
        {tab === 1 && <SignupUser switchTab={(i) => setTab(i)} />}
        {tab === 2 && <LoginAgent switchTab={(i) => setTab(i)} />}
        {tab === 3 && <SignupAgent switchTab={(i) => setTab(i)} />}
      </div>
    </Modal>
  );
}
