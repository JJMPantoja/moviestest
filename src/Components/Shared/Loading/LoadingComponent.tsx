import logoImgFilm from "../../../assets/img/movieLoading.svg";
import "./LoadingComponent.scss";

const LoadingComponent = () => {
  return (
    <>
      <div className="containerGlobal">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <img alt="logo_banco_azteca" src={logoImgFilm} />
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;
