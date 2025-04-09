import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./NotFound.tsx";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "../../config/constants.ts";
import AuthLayout from "../layouts/AuthLayout.tsx";

function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          {PUBLIC_ROUTES.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />}/>
          ))}

          {PROTECTED_ROUTES.map((route, index) => (
            <Route 
              key={index}
              element={<AuthLayout allowedRoles={route.roles}/>}
            >
              <Route path={route.path} element={<route.element />} />
            </Route>
          ))}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;



  {/* <Route path="/" element={<Home /> } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/servicio-solicitar" element={<RequestService/>} />
          <Route path="/servicio-ofrecer" element={<OfferService />} />
          <Route path="/servicios/:category" element={<ServicesCatalogue />} />
          <Route path="/servicios/:category/:servicioId" element={<ServiceDetails />} />
          <Route path="*" element={<NotFound />}/> */}