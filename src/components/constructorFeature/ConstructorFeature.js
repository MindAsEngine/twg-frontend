import './constructorFeature.scss'
import CFeatureImage from '../../img/constructorFeatureImage.png'
import { handleDragStart } from "../../app/function";

export default function ConstructorFeature() {
    return (
        <div className="cfeature flex container align-cent">
            <img src={CFeatureImage} className="cfeature__img" onDragStart={handleDragStart} />
            <div>
                <h1 className="fw700 fs48">Конструктор туров</h1>
                <p className="fw400 fs24">Собери путешествие мечты в три простых шага</p>
            </div>
        </div>
    )
}