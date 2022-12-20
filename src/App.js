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
import "./App.css"


function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<PageLoop />} />
        <Route exact path="pageLoop" element={<PageLoop />} />
        <Route exact path="pageCheatsheetJS" element={<CheatsheetJS />} />
        <Route exact path="pageJStips" element={<JStips />} />
        <Route exact path="pageBoxModel" element={<BoxModel />} />
        <Route exact path="pageShorthand" element={<ShorthandCSS />} />
        <Route exact path="pageUX/UI" element={<UXUI />} />
        <Route exact path="pageButtonCSS" element={<ButtonCSS />} />
        <Route exact path="pageGridAndFlex" element={<GridAndFlex />} />
        <Route exact path="pageJSDom" element={<JSDom />} />
        <Route exact path="pageThemeWeb" element={<ThemeWeb />} />
      </Routes>
    </Router>

  );
}

export default App;