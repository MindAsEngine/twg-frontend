import Feature from "../../components/feature/Feature";
//import Map from "../../components/map/Map";
import NoTur from "../../components/noTur/NoTur";
import AuthorTours from "../../components/AuthorTours/AuthorTours";
import "./style.module.scss";
import AboutUs from "../../components/aboutUs/AboutUs";

import { lazy, Suspense } from "react";

const Map = lazy(() => import("../../components/map/Map"));

const Home = () => {
  return (
    <>
      <section id="feature" class="bgGr">
        <Feature />
      </section>
      <section id="map">
        <Suspense fallback={<></>} >
          <Map />
        </Suspense>
      </section>
      <section id="aboutUs">
          <AboutUs />
      </section>
      <section id="author-tours" className="bg3">
        <AuthorTours />
      </section>
      <section id="notur"  className="bgGr">
        <NoTur />
      </section>
    </>
  );
};

export default Home;
