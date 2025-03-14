import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { MoviesArrT } from "../../../Interfaces/moviesType";
import { CardActionArea, Typography } from "@mui/material";

export default function CardMovieComponent({ film }: { film: MoviesArrT }) {
  return (
    <>
      <div className="d-inline">
        <Card
          className="cardComponent"
          style={{ width: 150, height: 200, opacity: 1 }}
        >
          <CardContent style={{ padding: 0 }}>
            <img
              loading="lazy"
              className="imgCard"
              src={film.images["Poster Art"].url}
              alt=""
            />
          </CardContent>
        </Card>
        {film.title}
      </div>
    </>
  );
}
