import { Box } from "@mui/material";

/**
 *
 * @param {component} formulario - es el componente que se mostrará según sea pasado como prop
 * @returns
 */
import { ReactNode } from "react";

const Contenedor = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Box
          boxShadow={3}
          sx={{
            borderRadius: "0.4rem",
            minHeight: "88vh",
            backgroundColor: "#fff",
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
export default Contenedor;
