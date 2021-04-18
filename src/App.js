import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/catalogue">
            <Catalogue />
          </Route>
          <Route path="/delonghi-world">
            <DelonghiWorld />
          </Route>
          <Route path="/telegram-bot">
            <TelegramBot />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/service-centers">
            <ServiceCenters />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/cookie-policy">
            <CookiePolicy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Catalogue() {
  return <h2>Catalogue</h2>;
}

function DelonghiWorld() {
  return <h2>DelonghiWorld</h2>;
}
function TelegramBot() {
  return <h2>TelegramBot</h2>;
}
function Support() {
  return <h2>Support</h2>;
}
function ServiceCenters() {
  return <h2>ServiceCenters</h2>;
}
function PrivacyPolicy() {
  return <h2>PrivacyPolicy</h2>;
}
function CookiePolicy() {
  return <h2>CookiePolicy</h2>;
}

export default App;
