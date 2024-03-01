import "./constructor.scss";
import ConstructorFeature from "../../components/constructorFeature/ConstructorFeature";
import Tabs from "../../components/tabs/Tabs";
import FormConstructorTourism from "../../components/forms/FormConstructorTourism";
import ConstructorSimilarOffers from "../../components/constructorSimilarOffers/ConstructorSimilarOffers";

import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";

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
    const handlePost = (values) => {
        const formData = new FormData();
        async function fetchData() {
            try {
                // setState({ ...state, loading; true });
                const response = await axios.post("https://jsonplaceholder.typicode.com/todos");
            } catch (error) {
                // setState({ ...state, loading; false });
                console.log(error);
            }
        }
    
        fetchData();
    }

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
    
    return (
        <>
            <section id="cfeature" className="bgGr">
                <ConstructorFeature />
            </section>
            <section id="constructor" className="bgWh">
                <Formik
                initialValues={formInitialValues}
                validate={(values) => {
                    /* требуется заполнить все поля */
                    const errors = {};
                    for (let key of Object.keys(formInitialValues)) {
                        if (!values[key]) {
                            errors[key] = "Требуется заполнить";
                        }
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    handlePost();
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