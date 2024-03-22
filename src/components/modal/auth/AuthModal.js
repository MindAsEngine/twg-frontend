import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../forms/forms.scss'
import "./AuthModal.scss";

import ChevronIcon from '../../../img/chevron-left.svg'

// Вход
function LoginUser({ switchTab }) {
    const formInitialValues = {
        'login': '',
        'password': ''
    }

    return (
        <>
            <div className="signup__header">
                <h2>Вход</h2>
                <button onClick={ () => switchTab(2) }>Я агент</button>
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
                { ({ isSubmitting }) => (
                    <Form>
                        <div className="form-row">
                            <label htmlFor="login">Логин или номер телефона</label>
                            <Field type="text" name="login" id="login" />
                            <ErrorMessage name="login">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-row">
                            <label htmlFor="password">Пароль</label>
                            <Field type="password" name="password" id="password" />
                            <ErrorMessage name="password">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>

                        <button type="button" className="forgot-password">Забыли пароль?</button>

                        <button className="btn primarybtn">Войти</button>
                    </Form>
                ) }
            </Formik>
            <div className="separator">или</div>

            <button className="btn primarybtn" onClick={ () => switchTab(1) }>Зарегистрироваться</button>
            <button className="btn" onClick={() => switchTab(3)}>Стать агентом</button>
        </>
    )
}

// Регистрация
function SignupUser({ switchTab }) {
    const formInitialValues = {
        'phone': '',
        'username': '',
        'password': '',
        'password2': '',
        'agreement': ''
    }

    return (
        <>
            <div className="signup__header">
                <h2>Регистрация</h2>
                <button onClick={ () => switchTab(0) }><img src={ChevronIcon} style={{ height: '16px' }} /></button>
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
                { ({ isSubmitting }) => (
                    <Form>
                        <div className="form-row">
                            <label htmlFor="phone">Номер телефона</label>
                            <Field type="text" name="phone" id="phone" />
                            <ErrorMessage name="phone">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-row">
                            <label htmlFor="username">Логин</label>
                            <Field type="text" name="username" id="username" />
                            <ErrorMessage name="username">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-row">
                            <label htmlFor="password">Пароль</label>
                            <Field type="password" name="password" id="password" />
                            <ErrorMessage name="password">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-row">
                            <label htmlFor="password2">Повторите пароль</label>
                            <Field type="password" name="password2" id="password2" />
                            <ErrorMessage name="password2">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>

                        <div className="form-row">
                            <label>
                                <Field type="checkbox" name="agreement" id="agreement" />
                                <span style={{ fontSize: '13px' }}> Я даю согласие на обработку моих персональных данных</span>
                            </label>
                            <ErrorMessage name="agreement">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>

                        <button className="btn primarybtn" style={{ marginTop: "24px" }}>Зарегистрироваться</button>
                    </Form>
                ) }
            </Formik>
        </>
    )
}

// войти как агент
function LoginAgent({ switchTab }) {
    const formInitialValues = {
        'key': '',
        'password': ''
    }

    return (
        <>
            <div className="signup__header">
                <h2>Войти как агент</h2>
                <button onClick={ () => switchTab(0) }><img src={ChevronIcon} style={{ height: '16px' }} /></button>
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
                { ({ isSubmitting }) => (
                    <Form>
                        <div className="form-row">
                            <label htmlFor="key">Ключ</label>
                            <Field type="text" name="key" id="key" />
                            <ErrorMessage name="key">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-row">
                            <label htmlFor="password">Пароль</label>
                            <Field type="password" name="password" id="password" />
                            <ErrorMessage name="password">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>

                        <button className="forgot-password">Забыли пароль?</button>

                        <button className="btn primarybtn" style={{ marginTop: "48px" }}>Войти</button>
                    </Form>
                ) }
            </Formik>
        </>
    )
}

// стать агентом
function SignupAgent({ switchTab }) {
    const formInitialValues = {
        'name': '',
        'phone': '',
        'discovery': '',
        'agreement': ''
    }

    return (
        <>
            <div className="signup__header">
                <h2>Регистрация</h2>
                <button onClick={ () => switchTab(0) }><img src={ChevronIcon} style={{ height: '16px' }} /></button>
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
                { ({ isSubmitting }) => (
                    <Form>
                        <div className="form-row">
                            <label htmlFor="name">ФИО</label>
                            <Field type="text" name="name" id="name" />
                            <ErrorMessage name="name">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-row">
                            <label htmlFor="phone">Номер телефона</label>
                            <Field type="text" name="phone" id="phone" />
                            <ErrorMessage name="phone">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-row">
                            <label htmlFor="discovery">Как вы узнали о нас?</label>
                            <Field type="text" name="discovery" id="discovery" />
                            <ErrorMessage name="discovery">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>

                        <div className="form-row">
                            <label>
                                <Field type="checkbox" name="agreement" id="agreement" />
                                <span style={{ fontSize: '13px' }}> Я даю согласие на обработку моих персональных данных</span>
                            </label>
                            <ErrorMessage name="agreement">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>

                        <div className="form-row">
                            <label>Документы</label>
                            <p className="form-row__description">Прикрепите документ, подтверждающий, что вы являетесь агентом, в формате PDF</p>
                            <label className="fileinput" htmlFor="documents">
                            <Field type="file" name="documents" id="documents" />
                            </label>
                            <ErrorMessage name="dicovery">{msg => <div className="form-error">{msg}</div>}</ErrorMessage>
                        </div>

                        <button className="btn primarybtn" style={{ marginTop: "24px" }}>Зарегистрироваться</button>
                    </Form>
                ) }
            </Formik>
        </>
    )
}

export default function ModalAuthComponent({ show, initTab, onClose, onAfterClose }) {
    const [tab, setTab] = useState(initTab);

    useEffect(() => {
        setTab(initTab)
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
            zIndex: "10"
          },
          content: {
            width: "100%",
            maxWidth: "512px",
            maxHeight: "max-content",
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className="signup">
            { tab === 0 && <LoginUser switchTab={(i) => setTab(i)} /> }
            { tab === 1 && <SignupUser switchTab={(i) => setTab(i)} /> }
            { tab === 2 && <LoginAgent switchTab={(i) => setTab(i)} /> }
            { tab === 3 && <SignupAgent switchTab={(i) => setTab(i)} /> }
        </div>
      </Modal>
    )
}