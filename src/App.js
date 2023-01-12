import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLoop from "./Components/pageLoop";
import CheatsheetJS from "./Components/pageCheatsheetJS";
import JStips from "./Components/pageJStips";
import BoxModel from "./Components/pageBoxModel";
import ShorthandCSS from "./Components/pageShorthand";
import UXUI from "./Components/pageUx-UI";
import ButtonCSS from "./Components/pageButtonCSS";
import GridAndFlex from "./Components/pageGridAndFlex";
import JSDom from "./Components/JSDom";
import ThemeWeb from "./Components/ThemeWeb";
import APIFood from "./Components/APIFood";
import "./App.css"


function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<PageLoop />} />
        <Route path="/pageLoop" element={<PageLoop />} />
        <Route path="/pageCheatsheetJS" element={<CheatsheetJS />} />
        <Route path="/pageJStips" element={<JStips />} />
        <Route path="/pageBoxModel" element={<BoxModel />} />
        <Route path="/pageShorthand" element={<ShorthandCSS />} />
        <Route path="/pageUXUI" element={<UXUI />} />
        <Route path="/pageButtonCSS" element={<ButtonCSS />} />
        <Route path="/pageGridAndFlex" element={<GridAndFlex />} />
        <Route path="/pageJSDom" element={<JSDom />} />
        <Route path="/pageThemeWeb" element={<ThemeWeb />} />
        <Route path="/pageAPIFood" element={<APIFood />} />
      </Routes>
    </Router>

  );
}

export default App;