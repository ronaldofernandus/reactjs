import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainContent from "./pages/MainContent/index";

function App() {
  return (
    <div className="h-[100vh] text-black dark:bg-neutral-900 dark:text-white relative">
      <MainContent></MainContent>
    </div>
  );
}

export default App;
