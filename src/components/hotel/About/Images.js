import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Mui
import { Box } from "@mui/system";
//Data
import hotelsData from "../../../data/hotels";
//Func
import finder from "../../../func/finder";
import replaceSpace from "../../../func/replaceSpace";
//Styles
import Styles from "./Images.module.css";
const Images = () => {
  const { hotelName } = useParams();

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    setHotel(finder(hotelsData, "name", replaceSpace(hotelName)));
  }, []);

  return (
    <Box
      component="section"
      className={Styles.container}
      sx={{
        width: { md: "70%" },
        height: { md: "300px" },
        marginTop: { md: "0" },
      }}
    >
      {hotel?.images.map((image, index) => (
        <div className={hotel.images.length === index + 1 && Styles.item5}>
          <img src={image} />
        </div>
      ))}
    </Box>
  );
};

export default Images;
