import { Route, Routes } from "react-router-dom";

import "./styles/base/style.module.scss";
import "./index.scss";
import { lazy, Suspense } from "react";
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Home = lazy(() => import("./pages/home/Home"));
const Constructor = lazy(() => import("./pages/constructor/Constructor"));
const Tur = lazy(() => import("./pages/tur/Tur"));

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
              path="/constructor"
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
