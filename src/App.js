import React from "react";
import Header from "./Header";
import EsimManagement from "./EsimManagement";
import SideBar from "./SideBar";

const App = () => (
  <div className="flex h-screen">
    <SideBar />
    <div className="flex-1 flex flex-col">
      <Header />
      <EsimManagement />
    </div>
  </div>
);

export default App;
