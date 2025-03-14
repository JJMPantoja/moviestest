export interface ResponseDataMoviesT {
  total: number;
  entries: MoviesArrT[];
}

export interface MoviesArrT {
  title: string;
  images: Images;
  description: string;
  programType: ProgramType;
  releaseYear: number;
}

export interface Images {
  "Poster Art": PosterArt;
}

export interface PosterArt {
  url: string;
  width: number;
  height: number;
}

export enum ProgramType {
  Movie = "movie",
  Series = "series",
}
