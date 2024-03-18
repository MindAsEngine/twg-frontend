import { Route, Routes } from "react-router-dom";

import "./styles/base/style.module.scss";
import "./index.scss";
import { lazy, Suspense } from "react";
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Home = lazy(() => import("./pages/home/Home"));
const Constructor = lazy(() => import("./pages/constructor/Constructor"));
const Tur = lazy(() => import("./pages/tur/Tur"));
const Display = lazy(() => import("./pages/display/Display"));
const Attractions = lazy(() => import("./pages/attractions/Attractions"));
const Hotel = lazy(() => import("./pages/hotel/Hotel"));

function App() {
  return (
    <>
      <section id="header" className="bg2 flex justif-ss-cent">
        <Header />
      </section>
      <section id="main">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<></>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/const"
              element={
                <Suspense fallback={<></>}>
                  <Constructor />
                </Suspense>
              }
            />
            <Route
              path="/tur"
              element={
                <Suspense fallback={<></>}>
                  <Tur />
                </Suspense>
              }
            />
            <Route
              path="/attraction"
              element={
                <Suspense fallback={<></>}>
                  <Attractions />
                </Suspense>
              }
            />
             <Route
              path="/hotel"
              element={
                <Suspense fallback={<></>}>
                  <Hotel />
                </Suspense>
              }
            />
            <Route
              path="/display"
              element={
                <Suspense fallback={<></>}>
                  <Display />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </section>
      <section id="footer" className="bg2 flex justif-ss-cent">
        <Footer />
      </section>
      <div className="footer__copyright bg2 flex justif-ss-cent f-cWh">
        <p>Copyright</p>
      </div>
    </>
  );
}

export default App;
