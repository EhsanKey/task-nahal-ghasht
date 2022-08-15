import {
  Avatar,
  Box,
  Collapse,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
//Styles
import Styles from "./Comment.module.css";
//Icons
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
const Comment = ({
  name,
  avatar,
  numberEga,
  date,
  noeOrag,
  comment: { images, text, like, score, dateComment },
}) => {
  console.log(name);
  const [open, setOpen] = useState(false);
  return (
    <div className={Styles.container}>
      <Box
        className={Styles.head}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <div className={Styles.profile}>
          <Avatar src={avatar} alt="avatar" />
          <div>
            <strong>
              {name} <p>اقامت داشته </p>{" "}
            </strong>
            <p>ثبت نظر در &nbsp; {dateComment}</p>
          </div>
        </div>
        <div className={Styles.travelStatus}>
          <strong>{numberEga}</strong> اقامت در &nbsp;
          <strong>{date}</strong>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <strong>اتاق {noeOrag}</strong>
        </div>
      </Box>
      <p className={Styles.comment}>{text}</p>
      <Box
        className={Styles.images}
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {images.map((image) => (
          <img src={image} />
        ))}
      </Box>

      <div className={Styles.footerCart}>
        <div className={Styles.like}>
          <div>
            <p>{like}</p>
            <ThumbUpIcon />
          </div>
          <span>مفید بود</span>
        </div>
        <div>
          <div className={Styles.score}>
            <p>{score}</p>
            <Typography component="h6" variant="span">
              میانگین امتیاز
            </Typography>
            <IconButton onClick={() => setOpen((prve) => !prve)}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
