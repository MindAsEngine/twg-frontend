import { useEffect, useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { Formik, Form, Field, ErrorMessage, useField, useFormikContext } from 'formik';
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/slices/User";
import instance from "../../app/axiosClient";

// styles
import "./style.scss"
import "../../components/forms/forms.scss"

// tags list component
function TagsListComponent({ value, setValue, suggestions }) {
    const handleAddition = currtag => {
        //if (setSuggestionsList.find((tag) => tag.id === currtag.id)) {
            setValue([...value, currtag]);
        //}
    }
    const handleDelete = i => {
        setValue(value.filter((tag, index) => index !== i));
    }
    const handleDrag = (tag, currPos, newPos) => {
        const newTags = value.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setValue(newTags);
    }
    return (
        <ReactTags
            tags={value}
            handleAddition={handleAddition}
            handleDelete={handleDelete}
            handleDrag={handleDrag}
            suggestions={suggestions}
            inputFieldPosition="inline"
            placeholder=""
            autocomplete
            autofocus={false}
        />
    )
}

// main component
export default function TourEditorAdmin() {
    const language = useSelector(
        (state) => state.persistantReducer.language.value
    );

    const formInitialValues = {
        'title': 'lorem ipsum',
        'description': 'dolor sit amet',
        'type': 'TOURISM',
        'countryId': 1,
        'agencyId': 1,
        'hotelIds': [1],
        'resortIds': [1],
        'isBurning': false,
        'isActive': true,
        'isCustom': false,
        'endDate': '2024-06-10',
        'startDate': '2024-06-01'
    }

    const dispatch = useDispatch();
    let token = useSelector((state) => state.persistantReducer.token.value);
    token == "" ? (token = localStorage.token) : (token = token);
    const handlePost = (values) => {
        console.log(values);
        async function fetchData() {
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

      fetchData();
    };

    return (
        <div className="toureditor container">
            <h1>Редактировать тур</h1>

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
                                <p className="form-row__title">Название тура</p>
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
                            <label htmlFor="countryId">
                                <p className="form-row__title">Страна тура (ID)</p>
                            </label>
                            <Field type="text" name="countryId" id="countryId" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="type">
                                <p className="form-row__title">Тип тура</p>
                            </label>
                            <Field type="text" name="type" id="type" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="agencyId">
                                <p className="form-row__title">Агенство (ID)</p>
                            </label>
                            <Field type="text" name="agencyId" id="agencyId" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="hotelIds">
                                <p className="form-row__title">Отели</p>
                            </label>
                            <Field type="text" name="hotelIds" id="hotelIds" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="resortIds">
                                <p className="form-row__title">Resort</p>
                            </label>
                            <Field type="text" name="resortIds" id="resortIds" />
                        </div>

                        <hr />

                        <div className="form-row">
                            <div className="form-row__flex" style={{ gap: "64px" }}>
                                <label className="checkbox">
                                    <Field type="checkbox" name="isBurning" id="isBurning" />
                                    Горящий тур
                                </label>
                                <label className="checkbox">
                                    <Field type="checkbox" name="isActive" id="isActive" />
                                    Активный
                                </label>
                                <label className="checkbox">
                                    <Field type="checkbox" name="isCustom" id="isCustom" />
                                    Кастомный
                                </label>
                            </div>
                        </div>

                        <hr />

                        <div className="form-row">
                            <label htmlFor="startDate">
                                <p className="form-row__title">Дата начала</p>
                            </label>
                            <Field type="date" name="startDate" id="startDate" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="endDate">
                                <p className="form-row__title">Дата конца</p>
                            </label>
                            <Field type="date" name="endDate" id="endDate" />
                        </div>

                        <hr />

                        <div className="form-row toureditor__formsubmit">
                            <button type="submit" className="toureditor__formsubmit__save">Сохранить</button>
                        </div>
                    </Form>
                ) }
            </Formik>
        </div>
    )
}