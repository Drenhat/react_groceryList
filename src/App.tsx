import React from 'react';
import {Page} from "./ui/pages/page/Page";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>This is a grocery list</h1>
        <Page />
      </RecoilRoot>
    </div>
  );
}

export default App;
