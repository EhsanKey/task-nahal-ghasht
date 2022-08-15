import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//func
import convertLetters from "../../../func/convertLetters";
import replaceSpace from "../../../func/replaceSpace";
//mui
import { Box, Button, Rating, Typography } from "@mui/material";
//Icons
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
//muiComponents
import CustomSeparator from "../../muiComponents/CustomSeparator";
//Styles
import Styles from "./AboutHotel.module.css";
import finder from "../../../func/finder";
import hotelsData from "../../../data/hotels";
const AboutHotel = () => {
  const { hotelName } = useParams();

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    setHotel(finder(hotelsData, "name", replaceSpace(hotelName)));
  }, []);

  const routes = [
    {
      href: "/",
      value: "هتل ها",
    },
    {
      href: `/hotels/${replaceSpace(hotelName)}`,
      value: replaceSpace(hotelName),
    },
  ];

  if (hotel)
    return (
      <Box
        component="section"
        className={Styles.container}
        sx={{ width: { md: "27%" }, height: { xs: "300px", md: "300px" } }}
      >
        <div className={Styles.head}>
          <CustomSeparator routes={routes} />
          <div className={Styles.hotel_star}>
            <Typography
              component="h5"
              variant="h5"
              sx={{ fontSize: { xs: "18px" } }}
            >
              نظرات {hotel.name}
            </Typography>
            <div className={Styles.star}>
              <Rating value={hotel.hotelStar} readOnly />
              <p>{convertLetters(hotel.hotelStar)} ستاره</p>
            </div>
            <div className={Styles.addres}>
              <span>آدرس:</span>
              <p>{hotel.addres}</p>
            </div>
          </div>
        </div>
        <Button variant="contained" id={Styles.btn1}>
          رزرو هتل مشهد <NavigateBeforeIcon />
        </Button>
        <Button variant="outlined" id={Styles.btn2}>
          رزرو سایر هتل های مشهد <NavigateBeforeIcon />
        </Button>
      </Box>
    );
};

export default AboutHotel;
