import { lazy } from "react";

export const Home = lazy(() => import("./Home"));
export const About = lazy(() => import("./About"));
export const Contact = lazy(() => import("./Contact"));
export const Tourism = lazy(() => import("./Tourism"));
export const Donate = lazy(() => import("./Donate"));

export const HomeRenovations = lazy(() =>
  import("./fundraisers/HomeRenovations")
);
export const SchoolRenovations = lazy(() =>
  import("./fundraisers/SchoolRenovations")
);
export const Orphanage = lazy(() => import("./fundraisers/Orphanage"));
export const OldAgeHome = lazy(() => import("./fundraisers/OldAgeHome"));
export const Annadhaanam = lazy(() => import("./initiatives/Annadhaanam"));
export const Education = lazy(() => import("./initiatives/Education"));
export const Gowshala = lazy(() => import("./initiatives/Gowshala"));
export const HealthCare = lazy(() => import("./initiatives/HealthCare"));
export const WomenEmpowerment = lazy(() =>
  import("./initiatives/WomenEmpowerment")
);
export const Construction = lazy(() => import("./temple/Construction"));
export const Festivals = lazy(() => import("./temple/Festivals"));

export const TermsAndConditions = lazy(() => import("./TermsAndConditions"));
export const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));

export const NotFound = lazy(() => import("./NotFound"));
