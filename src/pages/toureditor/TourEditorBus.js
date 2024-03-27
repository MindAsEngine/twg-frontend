import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField, useFormikContext } from 'formik';
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/slices/User";
import instance from "../../app/axiosClient";

// styles
import "./style.scss"
import "../../components/forms/forms.scss"

// components
import PhotoUpload from '../../components/photoUpload/PhotoUpload';
import EditorLanguageTabs from '../../components/editorLanguageTabs/EditorLanguageTabs';
import MapsWithSideBar from '../../components/map/MapsWithSideBar'

import EditorTagsList from '../../components/editorTagsList/EditorTagsList';

// main component
export default function TourEditorBus() {
    const language = useSelector(
        (state) => state.persistantReducer.language.value
    );
    
    const formInitialValues = {
        'title': '',
        'description': '',
        
        /*'thumbnail': '',
        'gallery': '',
        'extra': '',

        'start_1': '',
        'start_2': '',
        'finish_1': '',
        'finish_2': '',
        'summary': '',
        'description': '',
        'extra': '',
        'hotel-address': '',
        'hotel-name': '',
        'email': '',
        'phone': '',
        'price': '0',
        'currency': '0',
        'showinbot': '',
        'isshowcase': '',*/

        'type': 'TOURISM',
        'isBurning': false,
        'isActive': false,
        'isCustom': false,
        'countryId': 1,
        'agencyId': 1,
        'startDate': '',
        'endDate': '',
        'hotelIds': 1,
        'resortIds': 1
    }

    /*const { values, submitForm } = useFormikContext();
    useEffect(() => {
        console.log(values);
    }, [values, submitForm]);*/

    // используется для задания цвета кнопки "опубликовать"
    const [formState, setFormState] = useState({
        filled: false
    });

    // временное решение для тегов
    const [tagsList, setTagsList] = useState([]);
    const [propertiesList, setPropertiesList] = useState([]);

    const [suggestionsList, setSuggestionsList] = useState([
        { id: '0', text: 'Горящие туры' },
        { id: '1', text: 'Тег 2' },
        { id: '2', text: 'Тег 3' },
    ]);
    const [propertiesSuggestions, setPropertiesSuggestions] = useState([
        { id: '0', text: 'Бесплатный Wi-Fi' },
        { id: '1', text: 'Трёхразовое питание' },
        { id: '2', text: 'Первая линия' },
        { id: '3', text: 'Тег 3' },
        { id: '4', text: 'Тег 4' },
    ]);

    const dispatch = useDispatch();
    let token = useSelector((state) => state.persistantReducer.token.value);
    token == "" ? (token = localStorage.token) : (token = token);
    const handlePost = (values) => {
        const allvalues = {
            ...values,
            'hotelIds': [values.hotelIds],
            'resortIds': [values.resortIds]
        }
        console.table(allvalues);
        async function fetchData() {
            let config = {
                headers: {
                Authorization: "Bearer " + token,
            },
        };
        try {
            //setState({ ...state, loading: true });
            const response = await instance.post(`/travel/${language}/tours/create`, allvalues, config);
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
            {/* formState.filled ? 'filled' : 'not filled' */}

            <Formik
            initialValues={formInitialValues}
            validate={(values) => {
                /*const errors = {};
                for (let key of Object.keys(formInitialValues)) {
                    if (!values[key]) {
                        errors[key] = "Требуется заполнить";
                    }
                }
                setFormState({
                    ...formState,
                    filled: Object.keys(errors).length == 0
                });
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

                        {/*<div className="form-row">
                            <label>
                                <p className="form-row__title">Обложка</p>
                                <p className="form-row__caption">Фото должно соответствовать следующим критериям</p>
                            </label>
                            <PhotoUpload name="thumbnail" />
                        </div>*/}

                        {/*<hr />*/}

                        {/*<div className="form-row">
                            <label htmlFor="tags">
                                <p className="form-row__title">Теги</p>
                            </label>
                            <EditorTagsList value={tagsList} setValue={setTagsList} suggestions={suggestionsList} />
                        </div>*/}

                        {/*<div className="form-row">
                            <label>
                                <p className="form-row__title">Галерея</p>
                                <p className="form-row__caption">Фото должно соответствовать следующим критериям</p>
                            </label>
                            <PhotoUpload name="gallery" />
                        </div>*/}

                        {/*<hr />*/}

                        {/*<div className="form-row">
                            <label htmlFor="summary">
                                <p className="form-row__title">Вводный текст</p>
                            </label>
                            <Field as="textarea" name="summary" id="summary" />
                        </div>*/}

                        <div className="form-row">
                            <label htmlFor="description">
                                <p className="form-row__title">Описание</p>
                            </label>
                            <Field as="textarea" className="textarea-expanded" name="description" id="description" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="type">
                                <p className="form-row__title">Тип</p>
                            </label>
                            <Field as="select" name="type" id="type">
                                <option value="TOURISM">Туризм</option>
                                <option value="MEDICINE">Медицина</option>
                                <option value="BUS">Автобусные туры</option>
                            </Field>
                        </div>

                        <div className="form-row">
                            <label htmlFor="countryId">
                                <p className="form-row__title">Страна</p>
                            </label>
                            <Field as="select" name="countryId" id="countryId">
                                <option value="1">Страна 1</option>
                                <option value="2">Страна 2</option>
                                <option value="3">Страна 3</option>
                            </Field>
                        </div>

                        <div className="form-row">
                            <label htmlFor="agencyId">
                                <p className="form-row__title">Агенство</p>
                            </label>
                            <Field as="select" name="agencyId" id="agencyId">
                                <option value="1">Агенство 1</option>
                                <option value="2">Агенство 2</option>
                                <option value="3">Агенство 3</option>
                            </Field>
                        </div>

                        <div className="form-row">
                            <label htmlFor="hotelIds">
                                <p className="form-row__title">ID отелей</p>
                            </label>
                            <Field type="text" name="hotelIds" id="hotelIds" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="resortIds">
                                <p className="form-row__title">ID курортов</p>
                            </label>
                            <Field type="text" name="resortIds" id="resortIds" />
                        </div>

                        {/*<div className="form-row">
                            <label htmlFor="extra">
                                <p className="form-row__title">Дополнительная информация</p>
                            </label>
                            <Field as="textarea" name="extra" id="extra" />
                        </div>*/}

                        {/*<hr />

                        <div className="form-row">
                            <label htmlFor="tags">
                                <p className="form-row__title">Свойства</p>
                            </label>
                            <EditorTagsList value={propertiesList} setValue={setPropertiesList} suggestions={propertiesSuggestions} />
                        </div>*/}

                        {/*<div className="form-row">
                            <p className="form-row__title">Маршрут</p>
                            <p className="form-row__caption">Старт</p>
                            <div className="form-row__flex" style={{ gap: "64px" }}>
                                <div className="form-row__flex"><Field type="number" name="start_1" id="start_1" /> с. ш.</div>
                                <div className="form-row__flex"><Field type="number" name="start_2" id="start_2" /> в. д.</div>
                            </div>
                            <p className="form-row__caption">Финиш</p>
                            <div className="form-row__flex" style={{ gap: "64px" }}>
                                <div className="form-row__flex"><Field type="number"name="finish_1" id="finish_1" /> с. ш.</div>
                                <div className="form-row__flex"><Field type="number"name="finish_2" id="finish_2" /> в. д.</div>
                            </div>
                        </div>*/}

                        {/*<div className="form-row">
                            <MapsWithSideBar />
                        </div>*/}

                        {/*<div className="form-cols">
                            <div className="form-row">
                                <label htmlFor="hotel-address">
                                    <p className="form-row__title">Адрес отеля</p>
                                </label>
                                <Field type="text" name="hotel-address" id="hotel-address" />
                            </div>

                            <div className="form-row">
                                <label htmlFor="hotel-name">
                                    <p className="form-row__title">Название отеля</p>
                                </label>
                                <Field type="text" name="hotel-name" id="hotel-name" />
                            </div>
                        </div>*/}

                        {/*<div className="form-row">
                            <MapsWithSideBar />
                        </div>*/}

                        {/*<hr />

                        <div className="form-row">
                            <label htmlFor="phone">
                                <p className="form-row__title">Номер телефона</p>
                            </label>
                            <Field type="text" name="phone" id="phone" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="country">
                                <p className="form-row__title">Электронная почта</p>
                            </label>
                            <Field type="email" name="email" id="email" />
                        </div>*/}

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

                        {/*<div className="form-row">
                            <label htmlFor="price">
                                <p className="form-row__title">Цена</p>
                            </label>
                            <div className="form-row__flex">
                                <Field type="number" min="0.00" step=".01" name="price" id="price" style={{ width: "min-content" }} />
                                <select name="currency" id="currency">
                                    <option value="0">$</option>
                                    <option value="1">сум</option>
                                </select>
                            </div>
                        </div>*/}

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

                        <div className="form-row toureditor__formsubmit">
                            <button className="toureditor__formsubmit__save">Сохранить</button>
                            <button type="submit" className={`toureditor__formsubmit__publish ${(formState.filled) ? "active" : ""}`}>Опубликовать</button>
                        </div>
                    </Form>
                ) }
            </Formik>
        </div>
    )
}