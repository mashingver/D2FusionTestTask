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
  return (
    <section className="page">
      <h2>Home</h2>
    </section>
  );
}
function Catalogue() {
  return (
    <section className="page">
      <h2>Catalogue</h2>
    </section>
  );
}
function DelonghiWorld() {
  return (
    <section className="page">
      <h2>DelonghiWorld</h2>
    </section>
  );
}
function TelegramBot() {
  return (
    <section className="page">
      <h2>TelegramBot</h2>
    </section>
  );
}
function Support() {
  return (
    <section className="page">
      <h2>Support</h2>
    </section>
  );
}
function ServiceCenters() {
  return (
    <section className="page">
      <h2>ServiceCenters</h2>
    </section>
  );
}
function PrivacyPolicy() {
  return (
    <section className="page">
      <h2>PrivacyPolicy</h2>
    </section>
  );
}
function CookiePolicy() {
  return (
    <section className="page">
      <h2>CookiePolicy</h2>
    </section>
  );
}

export default App;
