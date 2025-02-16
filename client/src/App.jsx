import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
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
  NotFound,
  OldAgeHome,
  Orphanage,
  SchoolRenovations,
  Tourism,
  WomenEmpowerment,
} from "./pages";

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <div>
      <Suspense fallback={"loading"}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
