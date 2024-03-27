import Preview from "../../img/TurPrew.png";
import turNo from "../../img/turNo.png";
import "./hotelPage.scss";
import { ShowMoreContent } from "../../components/showMore/ShowMore";
import Comments from "../../components/comments/Comments";
import MapsWithSideBar from "../../components/map/MapsWithSideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import instance from "../../app/axiosClient";

const Hotel = ({ link }) => {
  const language = useSelector(
    (state) => state.persistantReducer.language.value
  );
  const token = useSelector((state) => state.persistantReducer.token.value);
  //Тут мы добавляем возможность получения id из url. Т.к. могут отправить ссылку на тур
  const { id } = useParams();
  const [state, setState] = useState({
    loading: false,
    pageContent: null,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        setState({ ...state, loading: true });
        const response = await instance.get(
          `/travel/${language}/hotels/get?id=${id || link}`
        );
        console.log(response);
        setState({ ...state, loading: false });
        setState({ ...state, pageContent: response.data });
      } catch (error) {
        setState({ ...state, loading: false });
        console.log(error);
      }
    }

    fetchData();
  }, [token]);
  return (
    <div className="tur">
      <section id="preview">
        <div
          className="preview__body"
          style={{
            backgroundImage: `url(${Preview})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="preview__text container m-centr flex justif-ss-betw pd">
            <p className="tur__name fs64 f-cWh">Hotel Аbc</p>
            <div className="tur__contact f-cWh">
              <p className="fs16 lh20 fw400">pochta@pocta.de</p>
              <p className="fs16 lh20 fw400">+1 234 567 89 00</p>
            </div>
          </div>
        </div>
      </section>
      <section id="tags"></section>
      <section id="photos"></section>
      <section id="about-tur">
        <div className="tur__about container m-centr pd">
          <div className="section__title m-centr fs24 fw400 lh22">О туре</div>
          <ShowMoreContent
            content={
              " Республика Кипр — многонациональное государство с широким Официально территория Республики Кипр включает 97,3 % территории одноимённого острова (остальные 2,7 % занимают британские военные базы Акротири и Декелия), а такжеблизлежащие острова Айос-Еорьос[7] (в заливе Хрисоху),Геронисос, Глюкиотисса, Кила, Киедес, Кордилия и Мазаки.Де-факто после событий 1974 года остров разделён на четыре части: 57,9 % территории острова контролируется властями Республики Кипр (населённой в основном этническими греками), 36 % — Турецкой Республикой Северного Кипра (признанной только Турцией и населённой в основном этническими турками), 3,4 % — ООН, 2,7 % — Британскими вооружёнными силами. Член ЕС, Совета Европы, ОБСЕ, ВТО."
            }
          />
          <div className="tur__photo m-centr">
            <img src={turNo} alt="" className="ad__img" />
          </div>
        </div>
      </section>
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
      <section id="add-tags"></section>
      <section id="map">
        <div className="tur__map container m-centr pd">
          <MapsWithSideBar />
        </div>
      </section>
      <Comments />
    </div>
  );
};

export default Hotel;
