import Feature from "../../components/feature/Feature";
import Map from "../../components/map/Map";
import NoTur from "../../components/noTur/NoTur";
import "./style.module.scss";

const Home = () => {
  return (
    <>
      <section id="feature" class="bgGr">
        <Feature />
      </section>
      <section id="map">
        <Map />
      </section>
      <section id="notur"  className="bgGr">
        <NoTur />
      </section>
    </>
  );
};

export default Home;
