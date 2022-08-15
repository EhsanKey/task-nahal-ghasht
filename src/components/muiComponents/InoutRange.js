import * as React from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function InputRange({ label, color, value }) {
  return (
    <Box>
      <Typography>{label}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Slider
          aria-label="Volume"
          defaultValue={30}
          max={10}
          value={+value}
          sx={{
            color: color,
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 20,
              height: 20,
              border: "3px solid #fff",
              borderRadius: "5px",
              backgroundColor: color,
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
        <Typography ml="10px">{value}</Typography>
      </Box>
    </Box>
  );
}
