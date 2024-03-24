import '../profileSection/style.scss'
import '../forms/forms.scss'
import './style.scss'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { useState } from 'react';
import SwapIcon from '../../img/swap.svg'

function CurrencyRateForm() {
    const formInitialValues = {
        'val1': 0,
        'val2': 0
    }

    function swapValues() {
        // ...
    }

    return (
        <Formik
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
                    <div className="grid">
                        <label htmlFor="val1">Сумы</label>
                        <label></label>
                        <label htmlFor="val2">Доллары</label>
                        <label></label>
                        <Field type="number" min="0" name="val1" id="val1" />
                        <button type="button" className="profilesection__currency__swapbtn" onClick={swapValues}><img src={SwapIcon} /></button>
                        <Field type="number" min="0" name="val2" id="val2" />
                        <button className="profilesection__currency__savebtn">Сохранить</button>
                    </div>
                </Form>
            ) }
        </Formik>
    )
}

export default function ProfileCurrencyRate() {
    return (
        <div className="profilesection">
            <p className="profilesection__header">Установить курсы валют</p>
            <div className="profilesection__currency">
                <CurrencyRateForm />
            </div>
        </div>
    )
}