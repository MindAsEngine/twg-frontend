import CardsList from "../../components/CardsList/CardsList";
import Feature from "../../components/feature/Feature";
import Map from "../../components/map/Map";
import NoTur from "../../components/noTur/NoTur";
import AuthorTours from "../../components/AuthorTours/AuthorTours";
import "./style.module.scss";

const Home = () => {
  return (
    <>
      <section id="feature" className="bg2">
        <Feature />
      </section>
      <section id="map">
        <Map />
      </section>
      <section id="cards-list" className="bg3">
        <CardsList />
      </section>
      <section id="author-tours" className="bg3">
        <AuthorTours />
      </section>
      <section id="notur"  className="bg2">
        <NoTur />
      </section>
    </>
  );
};

export default Home;
