import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import replaceSpace from "../../func/replaceSpace";
//Icons
import hotelIcon from "../../svg/hotel.png";
//Styles
import { Avatar } from "@mui/material";
export default function CustomSeparator({ routes }) {
  const navigate = useNavigate();

  return (
    <Breadcrumbs
      separator={<NavigateBeforeIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
        <Avatar src={hotelIcon} />
      </Link>
      {routes.map((route) => (
        <Link
          color="inherit"
          onClick={() => navigate(replaceSpace(route.href))}
          sx={{
            textAlign: "justify",
            textDecoration: "none",
            fontSize: "13px",
          }}
        >
          {route.value}
        </Link>
      ))}
    </Breadcrumbs>
  );
}
