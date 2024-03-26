import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField, useFormikContext } from 'formik';
import axios from "axios";

// styles
import "./style.scss"
import "../../components/forms/forms.scss"

// components
import PhotoUpload from '../../components/photoUpload/PhotoUpload';
import EditorLanguageTabs from '../../components/editorLanguageTabs/EditorLanguageTabs';
import MapsWithSideBar from '../../components/map/MapsWithSideBar'

import EditorTagsList from '../../components/editorTagsList/EditorTagsList';

// ru
function LanguageTabRU({ extraPhotosList }) {
    return (
        <div className="subform">
            <div className="form-row">
                <label htmlFor="summary-ru">
                    <p className="form-row__title">Вводный текст</p>
                </label>
                <Field as="textarea" name="summary-ru" id="summary-ru" />
            </div>

            <div className="form-row">
                <label htmlFor="description-ru">
                    <p className="form-row__title">Основной текст</p>
                </label>
                <Field as="textarea" className="textarea-expanded" name="description-ru" id="description-ru" />
            </div>

            <div className="form-row">
                <label>
                    <p className="form-row__title">Добавить фото</p>
                    <p className="form-row__caption">Фото должно соответствовать следующим критериям</p>
                </label>
                <PhotoUpload name="gallery" list={extraPhotosList} />
            </div>

            <div className="form-row">
                <label htmlFor="extra-ru">
                    <p className="form-row__title">Дополнительная информация</p>
                </label>
                <Field as="textarea" name="extra-ru" id="extra-ru" />
            </div>
        </div>
    )
}

// en
function LanguageTabEN({ extraPhotosList }) {
    return (
        <div className="subform">
            <div className="form-row">
                <label htmlFor="summary-en">
                    <p className="form-row__title">Вводный текст</p>
                </label>
                <Field as="textarea" name="summary-en" id="summary-en" />
            </div>

            <div className="form-row">
                <label htmlFor="description-en">
                    <p className="form-row__title">Основной текст</p>
                </label>
                <Field as="textarea" className="textarea-expanded" name="description-en" id="description-en" />
            </div>

            <div className="form-row">
                <label>
                    <p className="form-row__title">Добавить фото</p>
                    <p className="form-row__caption">Фото должно соответствовать следующим критериям</p>
                </label>
                <PhotoUpload name="gallery" list={extraPhotosList} />
            </div>

            <div className="form-row">
                <label htmlFor="extra-en">
                    <p className="form-row__title">Дополнительная информация</p>
                </label>
                <Field as="textarea" name="extra-en" id="extra-en" />
            </div>
        </div>
    )
}

// uz
function LanguageTabUZ({ extraPhotosList }) {
    return (
        <div className="subform">
            <div className="form-row">
                <label htmlFor="summary-uz">
                    <p className="form-row__title">Вводный текст</p>
                </label>
                <Field as="textarea" name="summary-uz" id="summary-uz" />
            </div>

            <div className="form-row">
                <label htmlFor="description-uz">
                    <p className="form-row__title">Основной текст</p>
                </label>
                <Field className="textarea-expanded" as="textarea" name="description-uz" id="description-uz" />
            </div>

            <div className="form-row">
                <label>
                    <p className="form-row__title">Добавить фото</p>
                    <p className="form-row__caption">Фото должно соответствовать следующим критериям</p>
                </label>
                <PhotoUpload name="gallery" list={extraPhotosList} />
            </div>

            <div className="form-row">
                <label htmlFor="extra-uz">
                    <p className="form-row__title">Дополнительная информация</p>
                </label>
                <Field as="textarea" name="extra-uz" id="extra-uz" />
            </div>
        </div>
    )
}

// main component
export default function TourEditorBus() {
    const formInitialValues = {
        'title': '',
        
        'thumbnail': '',
        'gallery': '',
        'extra': '',

        'start_1': '',
        'start_2': '',
        'finish_1': '',
        'finish_2': '',

        /*'tags': '',*/
        /*'properties': ''*/

        'summary-ru': '',
        'summary-en': '',
        'summary-uz': '',
        'description-ru': '',
        'description-en': '',
        'description-uz': '',
        'extra-ru': '',
        'extra-en': '',
        'extra-uz': '',
        'hotel-address': '',
        'hotel-name': '',
        'email': '',
        'phone': '',
        'price': '0',
        'currency': '0',
        'showinbot': '',
        'isshowcase': ''
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

    // для языковых вкладок
    const [languageTabsList, setLanguageTabsList] = useState([
        { title: 'ru', component: <LanguageTabRU /> },
        { title: 'uz', component: <LanguageTabUZ /> },
        { title: 'en', component: <LanguageTabEN /> }
    ]);

    const handlePost = (values) => {
        const formData = new FormData();
        console.log(values);
        /*async function fetchData() {
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

        fetchData();*/
    };

    return (
        <div className="toureditor container">
            <h1>Редактировать тур</h1>
            {/* formState.filled ? 'filled' : 'not filled' */}

            <Formik
            initialValues={formInitialValues}
            validate={(values) => {
                const errors = {};
                for (let key of Object.keys(formInitialValues)) {
                    if (!values[key]) {
                        errors[key] = "Требуется заполнить";
                    }
                }
                // console.log(Object.keys(errors));
                setFormState({
                    ...formState,
                    filled: Object.keys(errors).length == 0
                });
                // setThumbnail( values.thumbnail.at(-1) || [] );
                return errors;
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
                            <label>
                                <p className="form-row__title">Обложка</p>
                                <p className="form-row__caption">Фото должно соответствовать следующим критериям</p>
                            </label>
                            <PhotoUpload name="thumbnail" />
                        </div>

                        <hr />

                        <div className="form-row">
                            <label htmlFor="tags">
                                <p className="form-row__title">Теги</p>
                            </label>
                            <EditorTagsList value={tagsList} setValue={setTagsList} suggestions={suggestionsList} />
                        </div>

                        <div className="form-row">
                            <label>
                                <p className="form-row__title">Галерея</p>
                                <p className="form-row__caption">Фото должно соответствовать следующим критериям</p>
                            </label>
                            <PhotoUpload name="gallery" />
                        </div>

                        <hr />

                        <EditorLanguageTabs tabs={languageTabsList} initialtab={0} />

                        <hr />

                        <div className="form-row">
                            <label htmlFor="tags">
                                <p className="form-row__title">Свойства</p>
                            </label>
                            <EditorTagsList value={propertiesList} setValue={setPropertiesList} suggestions={propertiesSuggestions} />
                        </div>

                        <div className="form-row">
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
                        </div>

                        <div className="form-row">
                            <MapsWithSideBar />
                        </div>

                        <div className="form-cols">
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
                        </div>

                        <div className="form-row">
                            <MapsWithSideBar />
                        </div>

                        <hr />

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
                        </div>

                        <hr />

                        <div className="form-row">
                            <div className="form-row__flex" style={{ gap: "64px" }}>
                                <label className="checkbox">
                                    <Field type="checkbox" name="showinbot" id="showinbot" />
                                    Отображение в боте
                                </label>
                                <label className="checkbox">
                                    <Field type="checkbox" name="isshowcase" id="inshowcase" />
                                    Отображение на витрине
                                </label>
                            </div>
                        </div>

                        <hr />

                        <div className="form-row">
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