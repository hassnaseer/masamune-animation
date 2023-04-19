import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderPage from "./Components/Header";
import SideBar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage/index";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Legend from "./Pages/Legend";
import Magazine from "./Pages/Magazine";
import Careers from "./Pages/Career";
import Error from "./Pages/404/index";
import NeedHelp from "./Pages/NeedHelp";
import Talent from "./Pages/TalentSolutions";
import Approach from "./Pages/Approach";
import Privacy from "./Pages/Privacy-Policy";
import Projects from "./Pages/Projects";
import ScrollBar from "./Components/scrollbar"
import { startScrollHandler } from "./utils/scroll-handlers";
import { useThemeContext } from "./utils/theme-provider";
import Aos from "aos";
import "aos/dist/aos.css";
// import ProductPage from './Pages/ProductDesignPage';

function App() {
  const [onFooter, setOnFooter] = useState(false);
  const { setColorIconDark, setColorScrollDark, setColorLangDark } =
    useThemeContext();
  useEffect(() => {
    Aos.init({ duration: 2800 });
  }, []);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  useEffect(() => {
    startScrollHandler({
      detect: { setColorIconDark, setColorLangDark, setColorScrollDark },
      footer: { setOnFooter },
      horizontal: {},
    });
  }, []);
  return (
    <Router>
      <div className="app-container">
        <HeaderPage />
        <ScrollBar />
        <SideBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/legend" component={Legend} />
          <Route exact path="/magazine" component={Magazine} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/privacy_policy" component={Privacy} />
          <Route exact path="/Need_Help" component={NeedHelp} />
          <Route exact path="/Talent_Solutions" component={Talent} />
          <Route exact path="/Approach" component={Approach} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/*" component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
