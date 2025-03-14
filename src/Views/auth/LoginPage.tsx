import { useRef, useState } from "react";
import {
  Box,
  Button,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./LoginPage.style.scss";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../Components/Shared/Loading/LoadingComponent";
import { auth } from "../../Firebase/config-firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const email = useRef<HTMLInputElement | null>(null);
  const pass = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (email.current && pass.current) {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          pass.current.value
        ).then((userCredential) => {
          console.log(userCredential);
        });
      }
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión, intentelo más tarde", error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          {/* Formulario  */}
          <Box
            height={"100vh"}
            width={"100vw"}
            display="flex"
            alignItems="center"
          >
            <div className="containerFormLogin">
              {/* Input de correo en el login */}

              <Typography variant="h4" sx={{ mb: 1 }} className="titulo">
                <p
                  className="fw-bold m-auto pb-3"
                  style={{ letterSpacing: " 1px" }}
                >
                  Iniciar sesión
                </p>
              </Typography>

              <TextField
                inputRef={email}
                label="Correo"
                type="text"
                placeholder="correo@dominio.com"
                className="inputText"
                fullWidth
              />

              {/* Input de contraseña en el login */}

              <TextField
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                inputRef={pass}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />

              <Box className="d-flex justify-content-end">
                <Button
                  onClick={handleSubmit}
                  className="btnnav w-xs-100 w-sm-50"
                  variant="contained"
                  type="submit"
                >
                  Iniciar
                </Button>
              </Box>
            </div>

            <div className="containerImgLogin">
              <Box className="gridImg">
                <img
                  loading="lazy"
                  style={{ display: "none" }}
                  width={100}
                  height={100}
                  alt=""
                />
              </Box>
            </div>
          </Box>
        </>
      )}
    </>
  );
}
