import { lazy } from "react";

export const Header = lazy(() => import("./Header"));
export const Footer = lazy(() => import("./Footer"));

export const ScrollToTop = lazy(() => import("./ScrollToTop"));

export const DesktopNav = lazy(() => import("./nav/DesktopNav"));
export const MobileNav = lazy(() => import("./nav/MobileNav"));

export const HeroSlider = lazy(() => import("./HeroSlider"));

export const PanoramicBanner = lazy(() => import("./PanoramicBanner"));
export const DynamicSection = lazy(() => import("./DynamicSection"));
export const ContactCard = lazy(() => import("./ContactCard"));
