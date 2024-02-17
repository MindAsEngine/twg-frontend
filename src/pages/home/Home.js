import Feature from "../../components/feature/Feature";
//import Map from "../../components/map/Map";
import NoTur from "../../components/noTur/NoTur";
import "./style.module.scss";

import { lazy, Suspense } from "react";

const Map = lazy(() => import("../../components/map/Map"));

const Home = () => {
  return (
    <>
      <section id="feature" className="bg2">
        <Feature />
      </section>
      <section id="map">
        <Suspense fallback={<></>} >
          <Map />
        </Suspense>
      </section>
      <section id="notur" className="bg2">
        <NoTur />
      </section>
    </>
  );
};

export default Home;
