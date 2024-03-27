import "./constructor.scss";
import ConstructorFeature from "../../components/constructorFeature/ConstructorFeature";
import Tabs from "../../components/tabs/Tabs";
import FormConstructorTourism from "../../components/forms/FormConstructorTourism";
import ConstructorSimilarOffers from "../../components/constructorSimilarOffers/ConstructorSimilarOffers";

import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/slices/User";
import instance from "../../app/axiosClient";

// вкладки
const tabsList = [
    {
        title: 'Туризм',
        component: <FormConstructorTourism />
    },
    {
        title: 'Медицина',
        component: 'Содержимое вкладки «Медицина»'
    },
    {
        title: 'Автобусные туры',
        component: 'Содержимое вкладки «Автобусные туры»'
    }
];

const Constructor = () => {
    // начальные значения полей формы
    const formInitialValues = {
        'destination-start-city': '',
        'destination-country': '',
        'destination-region': '',
        'destination-city': '',
        'hotel-start-city': '',
        'hotel-country': '',
        'hotel-region': '',
        'hotel-city': '',
        'transfer-start-city': '',
        'transfer-country': '',
        'transfer-region': '',
        'transfer-city': ''
    };

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
        <>
            <section id="cfeature" className="bgGr">
                <ConstructorFeature />
            </section>
            <section id="constructor" className="bgWh">
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
                    // console.log(values);
                }}
                >
                    {({ isSubmitting }) => (
                    <Form className="container constructor">
                        <div className="tabs-wrapper">
                            <Tabs tabs={tabsList} initial={0} />
                        </div>
                        <div id="constructor-offers">
                            <ConstructorSimilarOffers />

                            <div id="constructor-offers__submit">
                                <p>Отправьте нашим агентам заполненную анкету, и они предложат вам персональный тур</p>
                                <button type="submit">Отправить</button>
                            </div>
                        </div>
                    </Form>
                    )}
                </Formik>
            </section>
        </>
    )
}

export default Constructor;