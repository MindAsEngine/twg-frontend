import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import instance from "../../app/axiosClient";
import Preview from "../../img/TurPrew.png";
import turNo from "../../img/turNo.png";
import "./turPage.scss";
import { ShowMoreContent } from "../../components/showMore/ShowMore";
import Comments from "../../components/comments/Comments";
import MapsWithSideBar from "../../components/map/MapsWithSideBar";
import TagsList from "../../components/tags/TagsList";
import Album from "../../components/album/Album";

const Tur = ({ link }) => {
  useEffect(() => {
    async function fetchData() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      try {
        setState({ ...state, loading: true });
        const response = await instance.get(
          `/travel/${language}/tours/get?slug=${id || link}`,
          config
        );
        console.log(response.data);
        setState({ ...state, loading: false });
        setState({ ...state, pageContent: response.data });
      } catch (error) {
        setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  }, []);
  const language = useSelector(
    (state) => state.persistantReducer.language.value
  );
  //Тут мы добавляем возможность получения id из url. Т.к. могут отправить ссылку на тур
  const { id } = useParams();
  const [state, setState] = useState({
    loading: false,
    pageContent: {
      title: "",
      price: "1000",
      description: "",
      medias: [],
      tags: [],
      hotels: [],
      country: [],
      comments: [],
    },
  });
  return (
    <div className="tur">
      <section id="preview">
        <div
          className="preview__body"
          style={{
            backgroundImage: `url(${Preview})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="preview__text container m-centr flex justif-ss-betw pd">
            <p className="tur__name fs64 f-cWh">{state.pageContent.title}</p>
            <div className="tur__price  bgYl">
              <p className="fs36 fw600 lh44">{state.pageContent.price}</p>
            </div>
          </div>
        </div>
      </section>
      {state.pageContent.tags > 0 ? (
        <section id="tags" className="container">
          <TagsList tagsList={state.pageContent.tags} />
        </section>
      ) : (
        <> </>
      )}
      {state.pageContent.medias > 0 ? (
        <section id="photos">
          <Album medias={state.pageContent.medias} />
        </section>
      ) : (
        <></>
      )}
      <section id="about-tur">
        <div className="tur__about container m-centr pd">
          <div className="section__title m-centr fs24 fw400 lh22">О туре</div>
          <ShowMoreContent content={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque corporis incidunt fuga voluptates tempore aperiam, vel officiis nobis sint alias eum, itaque mollitia impedit! Repudiandae quisquam quas natus sit.
          Modi, debitis magni veniam amet laudantium sequi sint eligendi id unde iure, saepe ex velit ipsam odio illum quaerat quod fugiat voluptate provident est temporibus eius aspernatur dolor accusamus. Quos?</p>} />
          <div className="tur__photo m-centr">
            <img src={turNo} alt="" className="ad__img" />
          </div>
        </div>
      </section>
      {state.pageContent.country > 0 ? (
        <section id="add-info">
          <div className="tur__addInfo container m-centr pd">
            <div className="section__title addInfo__title fs24 fw400 lh22">
              Дополнительная информация
            </div>
            <div className="addInfo__text fw400 fs16 lh22 ">
              <p>
                Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki
                ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs
                ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем
                Востоке[5] (хотя вне географических критериев может считаться
                частью Европы[6]), в восточной части Средиземного моря.
                Член Европейского союза с 1 мая 2004 года.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
      <section id="map">
        <div className="tur__map container m-centr pd">
          <MapsWithSideBar hotels={state.pageContent.hotels} />
        </div>
      </section>
      {state.pageContent.comments > 0 ? (
        <section id="comments">
          <Comments />
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tur;
