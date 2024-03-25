import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import Feature from "../../components/feature/Feature";
import NoTur from "../../components/noTur/NoTur";
import AuthorTours from "../../components/AuthorTours/AuthorTours";
import "./style.module.scss";
import AboutUs from "../../components/aboutUs/AboutUs";
import News from "../../components/news/News";

const Map = lazy(() => import("../../components/map/Map"));

const Home = () => {

  const visibilityIndex = useSelector((state) => state.persistantReducer.visibilityIndex.visibile);
  return (
    <>
      <section id="feature" className="bgGr">
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
      <section id="news"  className="bgGr">
        <News />
      </section>
    </>
  );
};

export default Home;
