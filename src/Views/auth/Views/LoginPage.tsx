import {
  Box,
  Button,
  Card,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import "./LoginPage.style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../types/loginTypes";
import Loading from "../../components/shared/Loading/Loading";
import { useState } from "react";

const validationSchema = yup.object().shape({
  usuario: yup.string().required("El usuario es obligatorio"),
  clave: yup
    .string()
    .min(1, "La contraseña debe tener al menos 1 caracter")
    .required("La contraseña es obligatoria"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      usuario: "",
      clave: "",
    },
  });

  const fetchingdataUser = async () => {
    navigate("/private/home");
    setLoading(false);
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <Box height={"100vh"} width={"100vw"} display="flex" alignItems="center">
        <Card
          sx={{
            minWidth: "95%",
            margin: "auto",
            maxHeight: "95%",
            filter: "drop-shadow(0px 0px 1000px #7bccad)",
          }}
        >
          <Grid container className="grid">
            {/* Imagen login */}
            <Grid
              item
              xs={8}
              className="gridImg animate__animated animate__fadeInLeftBig"
            >
              <img
                style={{ display: "none" }}
                width={100}
                height={100}
                alt=""
              />
            </Grid>
            {/* Formulario  */}
            <Grid item xs={4} className="redBackGround">
              <Grid item sx={{ display: "grid", justifyContent: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ mb: 1 }}
                  className="titulo animate__animated animate__backInUp"
                >
                  <p
                    className="fw-bold m-auto pb-3"
                    style={{ letterSpacing: " 1px" }}
                  >
                    Iniciar sesión
                  </p>
                </Typography>

                <form
                  autoComplete="false"
                  onSubmit={handleSubmit(async () => {
                    setLoading(true);
                    fetchingdataUser();
                  })}
                >
                  <Grid container className="containerFormLogin">
                    {/* Input de correo en el login */}
                    <Grid item xs={12} sx={{ mt: 2 }}>
                      <TextField
                        className="animate__animated animate__backInUp email"
                        {...register("usuario")}
                        label="Usuario"
                        type="text"
                        placeholder="correo@gmail.com"
                        fullWidth
                        error={!!errors.usuario}
                      />
                      {errors.usuario && (
                        <FormHelperText error>
                          {" "}
                          <i className="fa-solid fa-circle-exclamation"></i>{" "}
                          {errors.usuario.message}{" "}
                        </FormHelperText>
                      )}
                    </Grid>
                    {/* Input de contraseña en el login */}
                    <Grid item xs={12} sx={{ mt: 2 }}>
                      <TextField
                        className="clave animate__animated animate__backInUp"
                        {...register("clave")}
                        label="Contraseña"
                        type="clave"
                        placeholder="correo@gmail.com"
                        fullWidth
                        error={!!errors.clave}
                      />
                      {errors.clave && (
                        <FormHelperText error>
                          {" "}
                          <i className="fa-solid fa-circle-exclamation"></i>{" "}
                          {errors.clave.message}{" "}
                        </FormHelperText>
                      )}
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                      <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                        <Button
                          className="btnnav animate__animated animate__backInUp"
                          disabled={!!errors.usuario || !!errors.clave}
                          variant="contained"
                          type="submit"
                          fullWidth
                        >
                          Iniciar
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
