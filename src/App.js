import { Route, Routes } from "react-router-dom";

import "./styles/base/style.module.scss";
import "./index.scss";
import { lazy, Suspense } from "react";
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Home = lazy(() => import("./pages/home/Home"));
const Constructor = lazy(() => import("./pages/constructor/Constructor"));

function App() {
  return (
    <div className="#root">
      <section id="header" className="bg2 flex justif-ss-cent">
        <Header />
      </section>
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
      </Routes>
      <section id="footer" className="bg2 flex justif-ss-cent">
        <Footer />
      </section>
      <div className="footer__copyright bg2 flex justif-ss-cent f-cWh">
        <p>Copyright</p>
      </div>
    </div>
  );
}

export default App;
