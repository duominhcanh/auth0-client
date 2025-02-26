import { Route, Routes } from "react-router";
import { Home } from "./home";
import { Callback } from "./callback";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="callback" element={<Callback />} />
    </Routes>
  );
};
