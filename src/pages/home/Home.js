import Feature from "../../components/feature/Feature";
import Map from "../../components/map/Map";
import NoTur from "../../components/noTur/NoTur";
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
      <section id="notur"  className="bg2">
        <NoTur />
      </section>
    </>
  );
};

export default Home;
