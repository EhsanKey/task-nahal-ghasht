import { Grid, Grow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Data
import hotelsData from "../data/hotels";
import replaceSpace from "../func/replaceSpace";

//Styles
const Hotels = () => {
  const stylesItemGrid = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between ",
    bgcolor: "#03a9f4",
    borderRadius: "5px",
    padding: "10px",
    color: "#fff",
  };
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    setHotels(hotelsData);
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {hotels?.map((hotel) => {
        return (
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0", margin: "10px" }}
            {...(true ? { timeout: 1500 } : {})}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={`/hotels/${replaceSpace(hotel.name)}`}
            >
              <Grid
                item
                {...stylesItemGrid}
                sx={{ width: { min: "150px", xs: "200px" } }}
              >
                <Typography
                  component="span"
                  variant="span"
                  style={{ fontWeight: "900", marginLeft: "10px" }}
                >
                  {hotel.name}
                </Typography>
              </Grid>
            </Link>
          </Grow>
        );
      })}
    </Box>
  );
};

export default Hotels;
