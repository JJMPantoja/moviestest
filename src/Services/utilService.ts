import axios from "axios";
import { ResponseDataMoviesT } from "../Interfaces/moviesType";
const urlData = "https://api.npoint.io/546fd85e8651aa8e648a";

export const getDataMovies = async () => {
  try {
    const response = await axios.get<ResponseDataMoviesT>(urlData);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};
