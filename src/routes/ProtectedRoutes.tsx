import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { HomeView } from "../Views/Private/Home/HomeView";
import { Header } from "../Components/HeaderComponent";
import { Footer } from "../Components/FooterComponent";
import { MoviesSeriesView } from "../Views/Private/Views/MoviesSeriesView";
import { Typography } from "@mui/material";
import ContainerMain from "../Components/Shared/ContenedorMain/ContainerMain";

export const ProtectedRoutes = () => {
  const params = useParams();

  const style = {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center" as "center",
    padding: "0.5rem",
    marginTop: "4rem",
    display: "flex",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Typography variant="h4" className="d-flex classTitle" style={style}>
        <div className="text-capitalize" style={{ width: "fit-content" }}>
          {params["*"] && params["*"] !== "" ? params["*"] : "Clasificaciones"}{" "}
        </div>
        &nbsp;más populares
      </Typography>
      <ContainerMain>
        <Routes>
          <Route path="" Component={HomeView} />
          <Route path="/*" Component={HomeView} />
          <Route path="/:clasificacion" Component={MoviesSeriesView} />
        </Routes>
      </ContainerMain>
      <Footer />
    </div>
  );
};
