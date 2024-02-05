import Feature from "../../components/feature/Feature";
import Map from "../../components/map/Map";
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
    </>
  );
};

export default Home;
