import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { resetCSS } from "./global/resetCSS";

function App() {
  return (
    <main>
      <resetCSS/>
      <Layout/>
      <Profile/>
    </main>
  );
};

export default App;

