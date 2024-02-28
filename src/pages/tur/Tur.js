import Collapsible from "react-collapsible";
import Preview from "../../img/TurPrew.png";
import turNo from "../../img/turNo.png";
import "./style.scss";

const Tur = () => {
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
          <div className="preview__text container m-centr flex justif-ss-betw">
            <p className="tur__name fs64 f-cWh">Кипр Тур А</p>
            <div className="tur__contact fs16 fw400 lh22 f-cWh">
              <p className="tur__mail">pochta@pocta.de</p>
              <p className="tur__num">+1 234 567 89 00</p>
            </div>
          </div>
        </div>
      </section>
      <section id="tags"></section>
      <section id="photos"></section>
      <section id="about-tur">
        <div className="tur__about container m-centr">
          <div className="section__title m-centr ">О туре</div>
          <Collapsible trigger={<p>Показать больше</p>}>
            <div className="about__coll text fw400 fs16 lh22">
              <p>
                Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki
                ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs
                ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем
                Востоке[5] (хотя вне географических критериев может считаться
                частью Европы[6]), в восточной части Средиземного моря.
                Член Европейского союза с 1 мая 2004 года.
              </p>
            </div>
          </Collapsible>
          <div className="tur__photo m-centr">
            <img src={turNo} alt="" className="ad__img" />
          </div>
        </div>
      </section>
      <section id="add-info">
        <div className="tur__addInfo container m-centr">
          <div className="section__title addInfo__title">
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
        <div className="tur__map container m-centr">
          <div className="map__feedback">
            <button>Заказать тур</button>
            <p>Или связаться с нами</p>
            <div className="tur__contact">
              <p className="tur__mail">pochta@pocta.de</p>
              <p className="tur__num">+1 234 567 89 00</p>
            </div>
          </div>
        </div>
      </section>
      <section id="comments"></section>
    </div>
  );
};

export default Tur;
