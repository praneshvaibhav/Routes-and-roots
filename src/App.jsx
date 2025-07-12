import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopHomepage1 from "./pages/DesktopHomepage1";
import DesktopTajmahal1 from "./pages/DesktopTajmahal1";
import DesktopTajmahal3 from "./pages/DesktopTajmahal3";
import DesktopSHOP1 from "./pages/DesktopSHOP1";
import DesktopSignInTwo from "./pages/DesktopSignInTwo";
import DesktopCultureCalender1 from "./pages/DesktopCultureCalender1";
import DesktopTajmahal from "./pages/DesktopTajmahal";
import Wildlife from "./pages/Wildlife";
import DesktopSHOP from "./pages/DesktopSHOP";
import Heritage from "./pages/Heritage";
import DesktopLanguage from "./pages/DesktopLanguage";
import DesktopState1 from "./pages/DesktopState1";
import Museums from "./pages/Museums";
import DesktopEVisa from "./pages/DesktopEVisa";
import Art from "./pages/Art";
import DesktopAboutUs from "./pages/DesktopAboutUs";
import DesktopStateSearch from "./pages/DesktopStateSearch";
import DesktopSHOP2 from "./pages/DesktopSHOP2";
import Spritiual from "./pages/Spritiual";
import DesktopTajmahal2 from "./pages/DesktopTajmahal2";
import DesktopState2 from "./pages/DesktopState2";
import DesktopHomepage from "./pages/DesktopHomepage";
import DesktopSignIn from "./pages/DesktopSignIn";
import DesktopCultureCalender from "./pages/DesktopCultureCalender";
import DesktopState from "./pages/DesktopState";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-tajmahal-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-tajmahal-4":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-shop-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-sign-in-two":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-culture-calender-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-tajmahal":
        title = "";
        metaDescription = "";
        break;
      case "/wildlife":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-shop":
        title = "";
        metaDescription = "";
        break;
      case "/heritage":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-language":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-state-3":
        title = "";
        metaDescription = "";
        break;
      case "/museums":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-e-visa":
        title = "";
        metaDescription = "";
        break;
      case "/art":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-about-us":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-state-search":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-shop-3":
        title = "";
        metaDescription = "";
        break;
      case "/spritiual":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-tajmahal-3":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-state-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-culture-calender":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-state":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopHomepage1 />} />
      <Route path="/desktop-tajmahal-2" element={<DesktopTajmahal1 />} />
      <Route path="/desktop-tajmahal-4" element={<DesktopTajmahal3 />} />
      <Route path="/desktop-shop-2" element={<DesktopSHOP1 />} />
      <Route path="/desktop-sign-in-two" element={<DesktopSignInTwo />} />
      <Route
        path="/desktop-culture-calender-2"
        element={<DesktopCultureCalender1 />}
      />
      <Route path="/desktop-tajmahal" element={<DesktopTajmahal />} />
      <Route path="/wildlife" element={<Wildlife />} />
      <Route path="/desktop-shop" element={<DesktopSHOP />} />
      <Route path="/heritage" element={<Heritage />} />
      <Route path="/desktop-language" element={<DesktopLanguage />} />
      <Route path="/desktop-state-3" element={<DesktopState1 />} />
      <Route path="/museums" element={<Museums />} />
      <Route path="/desktop-e-visa" element={<DesktopEVisa />} />
      <Route path="/art" element={<Art />} />
      <Route path="/desktop-about-us" element={<DesktopAboutUs />} />
      <Route path="/desktop-state-search" element={<DesktopStateSearch />} />
      <Route path="/desktop-shop-3" element={<DesktopSHOP2 />} />
      <Route path="/spritiual" element={<Spritiual />} />
      <Route path="/desktop-tajmahal-3" element={<DesktopTajmahal2 />} />
      <Route path="/desktop-state-2" element={<DesktopState2 />} />
      <Route path="/desktop-homepage" element={<DesktopHomepage />} />
      <Route path="/desktop-sign-in" element={<DesktopSignIn />} />
      <Route
        path="/desktop-culture-calender"
        element={<DesktopCultureCalender />}
      />
      <Route path="/desktop-state" element={<DesktopState />} />
    </Routes>
  );
}
export default App;
