import React from "react";
import "../assets/styles/layouts/admin.css";
import NaveBar from "../components/header/NaveBar";
import Main from "../components/main/Main"

function Admin() {
  return (
    <>
      <header id="header">
        <NaveBar/>
      </header>

      <main id="main">
        <Main/>
      </main>
    </>
  );
}

export default Admin;
