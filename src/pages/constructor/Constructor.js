import "./constructor.scss";
import ConstructorFeature from "../../components/constructorFeature/ConstructorFeature";
import Tabs from "../../components/tabs/Tabs";
import FormConstructorTourism from "../../components/forms/FormConstructorTourism";
import ConstructorSimilarOffers from "../../components/constructorSimilarOffers/ConstructorSimilarOffers";

const tabsList = [
    {
        title: 'Туризм',
        component: <FormConstructorTourism />,
        id: 0
    },
    {
        title: 'Медицина',
        component: 'Вкладка 2',
        id: 1
    },
    {
        title: 'Автобусные туры',
        component: 'Вкладка 3',
        id: 2
    }
];

const Constructor = () => {
    return (
        <>
            <section id="cfeature" className="bgGr">
                <ConstructorFeature />
            </section>
            <section id="constructor" className="bgWh">
                <div className="container constructor">
                    <div>
                        <Tabs tabs={tabsList} initial={0} />
                    </div>
                    <div id="constructor-offers">
                        <ConstructorSimilarOffers />

                        <div id="constructor-offers__submit">
                            <p>Отправьте нашим агентам заполненную анкету, и они предложат вам персональный тур</p>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Constructor;