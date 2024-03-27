import { useEffect, useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { Formik, Form, Field, ErrorMessage, useField, useFormikContext } from 'formik';
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/slices/User";
import instance from "../../app/axiosClient";

// styles
import "./../toureditor/style.scss"
import "../../components/forms/forms.scss"

// main component
export default function TourEditorAdmin() {
    const language = useSelector(
        (state) => state.persistantReducer.language.value
    );

    const formInitialValues = {
        'name': 'Редисон',
        'city': 'Москва',
        'stars': 'FIVE',
        'description': '',
        'address': '',
        'propertyIds': [1, 2],
        'sightIds': [1, 52]
    }

    //const dispatch = useDispatch();
    //let token = useSelector((state) => state.persistantReducer.token.value);
    //token == "" ? (token = localStorage.token) : (token = token);
    const handlePost = (values) => {
        console.log(values);
        /*async function fetchData() {
        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        try {
          //setState({ ...state, loading: true });
          const response = await instance.post(`/travel/${language}/tours/create`, values, config);
        } catch (error) {
          //setState({ ...state, loading: false });
          console.log(error);
        }
      }

      fetchData();*/
    };

    return (
        <div className="toureditor container">
            <h1>Редактировать отель</h1>

            <Formik
            initialValues={formInitialValues}
            validate={(values) => {
                /*const errors = {};
                for (let key of Object.keys(formInitialValues)) {
                    if (!values[key]) {
                        errors[key] = "Требуется заполнить";
                    }
                }
                return errors;*/
            }}
            onSubmit={(values, { setSubmitting }) => {
                handlePost(values);
                setSubmitting(false);
            }}
            >
                { ({ isSubmitting, setFieldValue }) => (
                    <Form>
                        <div className="form-row">
                            <label htmlFor="title">
                                <p className="form-row__title">Название отеля</p>
                            </label>
                            <Field type="text" name="title" id="title" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="description">
                                <p className="form-row__title">Описание</p>
                            </label>
                            <Field type="text" name="description" id="description" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="city">
                                <p className="form-row__title">Город</p>
                            </label>
                            <Field type="text" name="city" id="city" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="stars">
                                <p className="form-row__title">Кол-во звёзд</p>
                            </label>
                            <Field as="select" name="stars" id="stars">
                                <option value="FIVE">5</option>
                                <option value="FOUR">4</option>
                                <option value="THREE">3</option>
                                <option value="TWO">2</option>
                                <option value="ONE">1</option>
                            </Field>
                        </div>

                        <div className="form-row">
                            <label htmlFor="address">
                                <p className="form-row__title">Адрес</p>
                            </label>
                            <Field type="text" name="address" id="address" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="propertyIds">
                                <p className="form-row__title">ID собственности</p>
                            </label>
                            <Field type="text" name="propertyIds" id="propertyIds" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="sightIds">
                                <p className="form-row__title">ID достопримечательностей</p>
                            </label>
                            <Field type="text" name="sightIds" id="sightIds" />
                        </div>

                        <div className="form-row toureditor__formsubmit">
                            <button type="submit" className="toureditor__formsubmit__save">Сохранить</button>
                        </div>
                    </Form>
                ) }
            </Formik>
        </div>
    )
}