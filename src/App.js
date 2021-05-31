import { Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Countdown from "./Components/Countdown";
import SocialMediaIcons from "./Components/SocialMediaIcons";
function App() {
  return (
    <React.Fragment>
      <SocialMediaIcons />
      <Countdown />
    </React.Fragment>
  );
}

export default App;
