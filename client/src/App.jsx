import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import { About, Contact, Home, NotFound, Tourism } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tourism" element={<Tourism />} />
      </Route>

      <Route path="*" element={<NotFound />} />
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
