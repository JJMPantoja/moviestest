import { useEffect, useState } from "react";
import { getDataMovies } from "../../../Services/utilService";
import { MoviesArrT } from "../../../Interfaces/moviesType";
import LoadingComponent from "../../../Components/Shared/Loading/LoadingComponent";
import { useParams } from "react-router-dom";
import CardMovieComponent from "../../../Components/Shared/Card/CardMovieComponent";
import {
  Box,
  Button,
  Modal,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import { ModalComponent } from "../../../Components/Shared/Modal/Modal";

export const MoviesSeriesView = () => {
  const [movies, setMovies] = useState<MoviesArrT[] | null>(null);
  const params = useParams();
  const [regPag, setRegPag] = useState("20");
  const [yearFilter, setYearFilter] = useState("Todos");
  const [iniReg] = useState(0);
  const [allYears, setAllYears] = useState<number[] | null>(null);
  const [filmSelected, setFilmSelected] = useState<MoviesArrT | null>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (movie: MoviesArrT) => {
    setFilmSelected(movie);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const fetchMovies = async () => {
    try {
      const data = await getDataMovies();
      setMovies(
        data.entries.filter(
          (movie) =>
            movie.programType ===
            (params["*"] === "series" ? params["*"] : "movie")
        )
      );
      const arrYears = new Set(
        data.entries
          ?.filter((movie: MoviesArrT) => movie.releaseYear >= 2010)
          .map((movie) => movie.releaseYear)
      );

      const sorArr =
        arrYears.size > 1 ? Array.from(arrYears).sort() : Array.from(arrYears);

      setAllYears(sorArr);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const showCards = (initalValue?: number, lastValue?: number) => {
    return (
      <>
        {movies
          ?.filter((movie: MoviesArrT) => movie.releaseYear >= 2010)
          .slice(initalValue ?? iniReg, lastValue ?? Number(regPag))
          .map((movie: MoviesArrT, index: number) => (
            <CardMovieComponent
              key={index}
              film={movie}
              callback={() => handleOpen(movie)}
            />
          ))}
      </>
    );
  };

  const changeNumberRegistries = (event: SelectChangeEvent) => {
    setRegPag(event.target.value as string);
  };

  const changeFilterYear = (event: SelectChangeEvent) => {
    setYearFilter(event.target.value);
    if (movies && movies?.length > 0) {
      setMovies(
        movies.filter(
          (movie: MoviesArrT) =>
            movie.releaseYear === Number(event.target.value)
        )
      );
    }
  };

  if (!movies) {
    return (
      <>
        <LoadingComponent />
      </>
    );
  }

  return (
    <>
      <Box component="section">
        <Typography style={{ padding: "2rem 2rem 0px 2rem" }} component="h4">
          Filtros
          <Box
            sx={{
              width: "100%",
              marginTop: "1rem",
              display: "flex",
              gap: "1rem",
            }}
          >
            <Box sx={{ maxWidth: 120, minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="numRegInput">Registros</InputLabel>
                <Select
                  labelId="numRegInput"
                  value={regPag}
                  label="Registros"
                  onChange={changeNumberRegistries}
                >
                  <MenuItem key={5} value={5}>
                    5
                  </MenuItem>
                  <MenuItem key={10} value={10}>
                    10
                  </MenuItem>
                  <MenuItem key={20} value={20}>
                    20
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ maxWidth: 120, minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="yearFilter">Año</InputLabel>
                <Select
                  labelId="yearFilter"
                  value={yearFilter}
                  label="Año"
                  onChange={changeFilterYear}
                >
                  <MenuItem key={(allYears?.length ?? 100) + 1} value={"Todos"}>
                    Todos
                  </MenuItem>
                  {allYears?.map((year: number, index: number) => (
                    <MenuItem key={index} value={String(year)}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gap: "1rem",
          rowGap: "3rem",
          padding: "3rem 6rem",
          gridAutoFlow: "dense",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        }}
      >
        {showCards()}
      </Box>

      {/* <Box
        component={"section"}
        className="w-100 d-flex justify-content-center"
      >
        <Pagination
          count={count}
          defaultPage={1}
          onChange={() => {
            setIniReg(iniReg + Number(regPag));
            showCards(iniReg + Number(regPag), iniReg + 2 * Number(regPag));
          }}
        />
      </Box> */}

      <Modal open={open} onClose={handleClose}>
        <ModalComponent data={filmSelected} handleClose={handleClose} />
      </Modal>
    </>
  );
};
