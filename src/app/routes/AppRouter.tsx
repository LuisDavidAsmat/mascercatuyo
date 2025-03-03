import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../features/Home/Home.tsx";

import RequestService from "../../features/RequestService/RequestService.tsx";
import OfferService from "../../features/OfferService/OfferService.tsx";
import Login from "../../features/Login/Login.tsx";
import Register from "../../features/Register/Register.tsx";
import ServiceDetails from "../../features/ServiceDetails/ServiceDetails.tsx";
import ServicesCatalogue from "../../features/ServicesCatalogue/ServicesCatalogue.tsx";
import NotFound from "./NotFound.tsx";

function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/servicio-solicitar" element={<RequestService/>} />
          <Route path="/servicio-ofrecer" element={<OfferService />} />
          <Route path="/servicios/:category" element={<ServicesCatalogue />} />
          <Route path="/servicios/:category/:servicioId" element={<ServiceDetails />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;