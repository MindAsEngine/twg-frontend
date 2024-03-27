import {
  Route,
  Routes,
  useLocation,
  Redirect,
  Navigate,
  useParams,
} from "react-router-dom";
import { lazy, Suspense, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./styles/base/style.module.scss";
import "./index.scss";

import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Home = lazy(() => import("./pages/home/Home"));
const Constructor = lazy(() => import("./pages/constructor/Constructor"));
const Tur = lazy(() => import("./pages/tur/Tur"));
const Display = lazy(() => import("./pages/display/Display"));
const Attractions = lazy(() => import("./pages/attractions/Attractions"));
const Hotel = lazy(() => import("./pages/hotel/Hotel"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const ProfileAgent = lazy(() => import("./pages/profileAgent/ProfileAgent"));
const TourEditorAdmin = lazy(() =>
  import("./pages/toureditor/TourEditorAdmin")
);

const TourEditorBus = lazy(() => import("./pages/toureditor/TourEditorBus"));
const TourEditorMed = lazy(() => import("./pages/toureditor/TourEditorMed"));
const AdminHomeEditor = lazy(() =>
  import("./pages/adminHomeEditor/AdminHomeEditor")
);

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const userState = useSelector((el) => el.persistantReducer.user);
  let { id } = useParams();
  const [isAuthenticated, userHasAuthenticated] = useState(
    userState.name !== null
  );
  return (
    <Wrapper>
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
                isAuthenticated ? (
                  <Suspense fallback={<></>}>
                    <Constructor />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/tur/:id"
              element={
                <Suspense fallback={<></>}>
                  <Tur />
                </Suspense>
              }
            />
            <Route
              path={`attraction/:id`}
              element={
                <Suspense fallback={<></>}>
                  <Attractions />
                </Suspense>
              }
            />
            <Route
              path="/hotel/:id"
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

            <Route
              path="/profile"
              element={
                isAuthenticated ? (
                  <Suspense fallback={<></>}>
                    <Profile />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            <Route
              path="/toureditor/admin"
              element={
                isAuthenticated ? (
                  <Suspense fallback={<></>}>
                    <TourEditorAdmin />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            <Route
              path="/admin/editpage"
              element={
                isAuthenticated ? (
                  <Suspense fallback={<></>}>
                    <AdminHomeEditor />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            <Route
              path="/toureditor/bus"
              element={
                isAuthenticated ? (
                  <Suspense fallback={<></>}>
                    <TourEditorBus />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/toureditor/med"
              element={
                isAuthenticated ? (
                  <Suspense fallback={<></>}>
                    <TourEditorMed />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />

            {false && (
              <Route
                path="/profile/agent"
                element={
                  <Suspense fallback={<></>}>
                    <ProfileAgent />
                  </Suspense>
                }
              />
            )}
          </Routes>
        </main>
      </section>
      <section id="footer" className="bg2 flex justif-ss-cent">
        <Footer />
      </section>
      <div className="footer__copyright bg2 flex justif-ss-cent f-cWh">
        <p>Copyright</p>
      </div>
    </Wrapper>
  );
}

export default App;
