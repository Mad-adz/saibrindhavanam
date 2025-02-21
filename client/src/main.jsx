import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AudioProvider } from "./context/AudioContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AudioProvider>
      <Toaster />
      <App />
    </AudioProvider>
  </StrictMode>
);
