import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Menu from "./Components/Menu/Menu";
import CataloguePage from "./Components/Pages/CataloguePage/CataloguePage";
import DelonghiWorldPage from "./Components/Pages/DelonghiWorldPage/DelonghiWorldPage";
import TelegramBotPage from "./Components/Pages/TelegramBotPage/TelegramBotPage";
import SupportPage from "./Components/Pages/SupportPage/SupportPage";
import ServiceCentersPage from "./Components/Pages/ServiceCentersPage/ServiceCentersPage";
import PrivacyPolicyPage from "./Components/Pages/PrivacyPolicyPage/PrivacyPolicyPage";
import CookiePolicyPage from "./Components/Pages/CookiePolicyPage/CookiePolicyPage";
import HomePage from "./Components/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/catalogue">
            <CataloguePage />
          </Route>
          <Route path="/delonghi-world">
            <DelonghiWorldPage />
          </Route>
          <Route path="/telegram-bot">
            <TelegramBotPage />
          </Route>
          <Route path="/support">
            <SupportPage />
          </Route>
          <Route path="/service-centers">
            <ServiceCentersPage />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>
          <Route path="/cookie-policy">
            <CookiePolicyPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
