import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MoviesArrT } from "../../../Interfaces/moviesType";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalComponent = ({
  data,
  handleClose,
}: {
  data: MoviesArrT | null;
  handleClose: () => void;
}) => {
  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {data?.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Card sx={{ maxWidth: 345, height: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={data?.images["Poster Art"].url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Año de estreno: {data?.releaseYear}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    overflow: "scroll",
                    maxHeight: "10rem",
                  }}
                >
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Clasificación: {data?.programType.toLocaleUpperCase()}
                  </Typography>
                  {data?.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Typography>
        <Button
          onClick={handleClose}
          className="btnnav w-sm-25 w-xs-100 mt-4"
          variant="contained"
          type="submit"
        >
          Cerrar
        </Button>
      </Box>
    </div>
  );
};
