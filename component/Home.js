import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Content from "./ContentMain";

function Home() {
  return (
    <div className="container-fluid p-0">
      <Header></Header>
      <NavBar></NavBar>
      <Content />
    </div>
  );
}

export default Home;
