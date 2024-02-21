import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import NavBar from "./components/Navbar";
import Start from "./components/0.Start/Start";
import IntroPage from "./components/1.Intro/IntroPage";
import SkillsPage from "./components/2.Skills/SkillsPage";
import { theme } from "./theme";
import ProjectPage from "./components/3.Project/ProjectPage";
import TimeLinePage from "./components/4.TimeLine/TimeLinePage";
import { Helmet } from "react-helmet";
import ExperiencePage from "./components/5.Experience/ExperiencePage";

function App() {
  const logo = require("../src/assets/images/logo.jpg");

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <Helmet>
            <title>Hyukjoo Lee Portfolio Website</title>
            <link rel="icon" type="image/jpg" href={logo} sizes="16x16" />
          </Helmet>
          <Background />
          <NavBar />
          <Start />
          <IntroPage />
          <SkillsPage />
          <TimeLinePage />
          <ExperiencePage/>
          <ProjectPage />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
