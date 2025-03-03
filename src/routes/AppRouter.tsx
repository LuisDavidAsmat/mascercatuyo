import { BrowserRouter, Route, Routes } from "react-router";
import Register from "../components/pages/register/Register";
import Login from "../components/pages/login/login";
import Home from "../features/Home/Home.tsx";


import ServicesCatalogue from "../components/pages/ServicesCatalogue/ServicesCatalogue.tsx"
import NotFound from "../components/pages/NotFound/404.tsx";
import ServiceDetails from "../components/pages/ServiceDetails/ServiceDetails.tsx";
import RequestService from "../features/RequestService/RequestService.tsx";
import OfferService from "../features/OfferService/OfferService.tsx";

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