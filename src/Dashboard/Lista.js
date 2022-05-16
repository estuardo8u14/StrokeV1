import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { auth } from "../Auth/firebase";
import { signOut } from "firebase/auth";
import "./lista.css";
import { useNavigate } from "react-router-dom";

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  let navigate = useNavigate();
  const homee = () => {
    let pathHome = "/home";
    navigate(pathHome);
  };
  return (
    <>
      <div>
        <button className="back">
          <span onClick={homee}></span>
        </button>
      </div>
      <div>
        <button className="signout">
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </button>
      </div>
      <Box
        sx={{
          position: "fixed",
          bgcolor: "background.paper",
        }}
      >
        <FixedSizeList
          height={720}
          width={1200}
          itemSize={50}
          itemCount={20}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </>
  );
}
