import React from "react";
import { Grommet, Box,  } from "grommet";

import Calculator from "./features/Calculator/Calculator"

const theme = {
  global: {
    colors: {
      brand: '#cc0000',
      back: "#292929",
      card: "#bfdbf7",
      accent: "#994650",
      ok: '#00C781',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill align="center" justify="center" background="back">
        <Calculator />
      </Box>
  
    </Grommet>
  );
}

export default App;
