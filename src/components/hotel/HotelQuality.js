import React from "react";
//mui
import { Box, Button } from "@mui/material";
//Styles
import Styles from "./HotelQuality.module.css";
import InputRange from "../muiComponents/InoutRange";
const HotelQuality = ({ score }) => {
  return (
    <Box
      className={Styles.container}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Box
        className={Styles.score}
        sx={{
          flexDirection: { sx: "row", md: "column" },
          marginTop: { xs: 0, md: "18px" },
          marginRight: { xs: "0", md: "20px" },
        }}
      >
        <span>{score}</span>
        <Box
          sx={{
            justifyContent: { xs: "unset", md: "space-between" },
            height: { xs: "auto", md: "50%" },
          }}
        >
          <p>میانگین امتیاز</p>
          <Button variant="outlined">مشاهده نطر</Button>
        </Box>
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
        <InputRange label="قیمت به نسبت کیفیت" color="#000" value="7.5" />
      </Box>
    </Box>
  );
};

export default HotelQuality;
