import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import {
  About,
  Annadhaanam,
  Construction,
  Contact,
  Donate,
  Education,
  Festivals,
  Gowshala,
  HealthCare,
  Home,
  HomeRenovations,
  OldAgeHome,
  Orphanage,
  PrivacyPolicy,
  SchoolRenovations,
  TermsAndConditions,
  Tourism,
  WomenEmpowerment,
} from "./pages";
import { Loader } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="connect" element={<Contact />} />
            <Route path="tourism" element={<Tourism />} />
            <Route path="donate" element={<Donate />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            <Route path="initiatives">
              <Route path="annadhaanam" element={<Annadhaanam />} />
              <Route path="gowshala" element={<Gowshala />} />
              <Route path="education" element={<Education />} />
              <Route path="healthcare" element={<HealthCare />} />
              <Route path="women-empowerment" element={<WomenEmpowerment />} />
            </Route>
            <Route path="temple">
              <Route path="Festivals" element={<Festivals />} />
              <Route path="construction" element={<Construction />} />
            </Route>
            <Route path="fundraisers">
              <Route path="school-renovation" element={<SchoolRenovations />} />
              <Route path="home-renovation" element={<HomeRenovations />} />
              <Route path="orphanage" element={<Orphanage />} />
              <Route path="old-age-home" element={<OldAgeHome />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
