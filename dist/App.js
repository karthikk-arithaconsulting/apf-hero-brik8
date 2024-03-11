import { ThemeContextProvider } from "@apf/core";
import { AppWrapper } from "@apf/app-wrapper";
import "@apf/core/dist/style.css";
import "./App.css";
import React, { useState } from "react";
import InputData from "./data/schema.json";
import HeroBrikEight from "./components/HeroBrikEight";
function App() {
    var _a = useState(InputData), brikData = _a[0], setBrikData = _a[1];
    var resetJson = function () { return setBrikData(InputData); };
    return (React.createElement(ThemeContextProvider, null,
        React.createElement(AppWrapper, { brikData: brikData, resetJson: resetJson, handleChange: function (value) { return setBrikData(value); } },
            React.createElement("div", { className: "App" },
                React.createElement(HeroBrikEight, { data: brikData })))));
}
export default App;
