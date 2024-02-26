import { useState } from "react";
import SimilarOffer from "../similarOffer/SimilarOffer";

export default function ConstructorSimilarOffers() {
    const [offersList, setOffersList] = useState([
        {
            title: "Венгрия",
            img: "https://i.imgur.com/1XCMZE5.jpg",
            path: "/"
        },
        {
            title: "Венгрия",
            img: "https://i.imgur.com/1XCMZE5.jpg",
            path: "/"
        },
        {
            title: "Венгрия",
            img: "https://i.imgur.com/1XCMZE5.jpg",
            path: "/"
        },
        {
            title: "Венгрия",
            img: "https://i.imgur.com/1XCMZE5.jpg",
            path: "/"
        }
    ]);

    // загрузка данных с бэка
    /*
    useEffect(() => {
        // ...
        setCardsArray(array => {
            // ...
        })
    }, []);
    */
   
    return (
        <>
            <p className="fw600 fs24 text2">Похожие предложения</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
                {offersList.map((o) => <SimilarOffer title={o.title} img={o.img} path={o.path} />)}
            </div>
        </>
    )
}