/* eslint-disable react/react-in-jsx-scope */
import { ThemeContextProvider } from "@apf/core";
import { AppWrapper } from "@apf/app-wrapper2";
import { BrikWrapper } from "@apf/brik-wrapper";
import "@apf/core/dist/style.css";
import "./App.css";
import { useState } from "react";
// import InputData from "./data/schema.json";
import Data from "./data/newData.json";

import HeroBrikEight from "./components/HeroBrikEight";
function App() {
  const [data, setData] = useState(JSON.parse(JSON.stringify(Data)));
  const [brikId, setBrikId] = useState("");
  const [showEditor, setShowEditor] = useState(false);

  const handleBrikSelect = (id) => {
    setBrikId(id);
    setShowEditor(true);
  };

  return (
    <ThemeContextProvider>
      <AppWrapper
        data={data.pages}
        setData={setData}
        defaultData={Data}
        showEditor={showEditor}
        handleClose={() => setShowEditor(false)}
        isBrik={true}
        brikId={brikId}
      >
        <div className="App">
          <BrikWrapper
            handleClick={handleBrikSelect}
            data={data.pages[0].pageData[0].cols[0].colData[0]}
          >
            <HeroBrikEight
              data={data.pages[0].pageData[0].cols[0].colData[0]}
            />
          </BrikWrapper>
        </div>
      </AppWrapper>
    </ThemeContextProvider>
  );
}

export default App;
