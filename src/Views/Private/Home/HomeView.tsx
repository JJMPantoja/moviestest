import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import movieCard from "../../../assets/img/movie-card.png";

export const HomeView = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Series",
      callBack: () => navigate("/home/series"),
    },
    {
      title: "Movies",
      callBack: () => navigate("/home/peliculas"),
    },
  ];

  return (
    <>
      <div className="containerCard">
        {cards.map((card: { title: string; callBack: () => void }) => (
          <div className="d-inline">
            <Card className="cardComponent" onClick={card.callBack}>
              <CardContent>
                <img className="imgCardClasification" src={movieCard} alt="" />
                <Typography variant="body2" className="titleCard">
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
            Popular {card.title}
          </div>
        ))}
      </div>
    </>
  );
};
