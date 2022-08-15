import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//data
import hotelsData from "../../../../data/hotels";
//func
import finder from "../../../../func/finder";
import replaceSpace from "../../../../func/replaceSpace";
//mui
import FlareIcon from "@mui/icons-material/Flare";
//Styles
import Styles from "./ScorsHotel.module.css";
import InputRange from "../../../muiComponents/InoutRange";
import { Box, Typography } from "@mui/material";

const ScorsHotel = () => {
  const { hotelName } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    setHotel(finder(hotelsData, "name", replaceSpace(hotelName)));
  }, []);

  return (
    <section className={Styles.container}>
      <Box
        className={Styles.head}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: { xs: "space-evenly", md: "start" },
        }}
      >
        <Box
          className={Styles.scoreContainer}
          sx={{ width: { xs: "80%", md: "250px" }, bgcolor: "red !impotant" }}
        >
          <div>{hotel?.score}</div>
          <div>
            <strong>امتیاز هتل</strong>
            <p>بر اساس 25 نظر مسافران</p>
          </div>
        </Box>
        <Typography
          component="p"
          variant="p"
          sx={{
            width: { md: "70%" },
            m: { xs: "0", md: "0 0 0 50px " },
            marginTop: { xs: "15px", md: "0" },
          }}
        >
          &#10040; امتیاز هتل بر اساس نظر مسافران تراپنر و کاربران پلتفرم که
          درباره هتل نظر ثبت کرده اند محاسبه گردیده است.
        </Typography>
      </Box>
      <Box
        className={Styles.inputContainer}
        sx={{
          gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
        }}
      >
        <InputRange label="امکانات" color="#000" value="7.5" />
        <InputRange label="تنوع و کیفیت غذا" color="#000" value="7.5" />
        <InputRange label="موقعیت هتل" color="#000" value="7.5" />
        <InputRange label="وضعیت اتاق و نظافت" color="#000" value="7.5" />
        <InputRange label="کارکنان و خدمات" color="#000" value="7.5" />
        <InputRange label="قیمت به نسبت کیفیت" color="#000" value=  "7.5" />
      </Box>
    </section>
  );
};

export default ScorsHotel;
