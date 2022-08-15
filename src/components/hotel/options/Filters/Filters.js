import React from "react";
//mui
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
//Styles
import Styles from "./Filters.module.css";

const Filters = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box className={Styles.container}>
      <div>
        <Typography component="h6" variant="h6">
          فیلتر نظرات بر اساس
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          color="primary"
          className={Styles.toggleContainer}
        >
          <ToggleButton value="1">امکانات</ToggleButton>
          <ToggleButton value="2">موقعیت</ToggleButton>
          <ToggleButton value="3">کارکنان و خدمات</ToggleButton>
          <ToggleButton value="4">تنوع و کیفیت غذا</ToggleButton>
          <ToggleButton value="5">وضعیت اتاق و نطافت</ToggleButton>
          <ToggleButton value="6">قیمت به نسبت کیفیت</ToggleButton>
        </ToggleButtonGroup>
        <p className={Styles.resultFilter}>
          &#10040; 14 نظر بر اساس فیلتر های مورد نظر پیدا شد.
        </p>
      </div>
      <div>
        <Typography component="h6" variant="h6">
          مرتب سازی نظرات بر اساس
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          color="primary"
          className={Styles.toggleContainer}
        >
          <ToggleButton value="7">جدید ترین</ToggleButton>
          <ToggleButton value="8">قدیمی ترین</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </Box>
  );
};

export default Filters;
