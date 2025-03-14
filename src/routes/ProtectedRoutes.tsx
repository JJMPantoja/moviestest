import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { HomeView } from "../Views/Private/Home/HomeView";
import { Header } from "../Components/HeaderComponent";
import { Footer } from "../Components/FooterComponent";
import { MoviesSeriesView } from "../Views/Private/Views/MoviesSeriesView";
import Contenedor from "../Components/Shared/ContenedorMain/ContenedorMain";
import { Typography } from "@mui/material";

export const ProtectedRoutes = () => {
  const params = useParams();

  const style = {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center" as "center",
    padding: "0.5rem",
    marginTop: "4rem",
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Typography variant="h4" className="classTitle" style={style}>
        {params["*"] && params["*"] !== ""
          ? capitalizeFirstLetter(params["*"])
          : "Clasificaciones"}{" "}
        más populares
      </Typography>
      <Contenedor>
        <Routes>
          <Route path="" Component={HomeView} />
          <Route path="/*" Component={HomeView} />
          <Route path="/:clasificacion" Component={MoviesSeriesView} />
        </Routes>
      </Contenedor>
      <Footer />
    </div>
  );
};
