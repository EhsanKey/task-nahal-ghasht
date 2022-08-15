import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//func
import replaceSpace from "../../func/replaceSpace";
import finder from "../../func/finder";
//Data
import hotelsData from "../../data/hotels";
import usersComments from "../../data/usersComments";
//Components
import Images from "./About/Images";
import AboutHotel from "./About/AboutHotel";
import Options from "./options/Options";
import Comment from "../shared/Comment";
import HotelQuality from "./HotelQuality";
//mui
import { Box } from "@mui/system";
//Styles
import Styles from "./Hotel.module.css";
import { Button } from "@mui/material";
const Hotel = () => {
  const { hotelName } = useParams();
  const [hotel, setHotel] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    setHotel(finder(hotelsData, "name", replaceSpace(hotelName)));
    setComments(finder(usersComments, "nameHotel", replaceSpace(hotelName)));
  }, []);

  return (
    <main className={Styles.container}>
      <Box
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        component="section"
        className={Styles.about_container}
      >
        <AboutHotel />
        <Images />
      </Box>
      <Options />
      {comments?.comment.map((com) => {
        return !com.comment.images.length && <Comment {...com} />;
      })}
      <HotelQuality {...hotel} />
      {comments?.comment.map((com) => {
        return com.comment.images && <Comment {...com} />;
      })}
      <Button className={Styles.btn} variant="contained">
        نمایش 250 نظر دیگر
      </Button>
    </main>
  );
};

export default Hotel;
