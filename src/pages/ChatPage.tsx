import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import { socket } from "../utils/clientApi";
import MessageField from "./MessageField";
import Messages from "./Messages";
type Props = {
  id: string;
};
const ChatPage: React.FC<Props> = ({ id }) => {
  const onReset = () => {
    socket.emit("reset chat");
  };

  return (
    <>
      <Typography variant="h5" data-testid="app-heading" sx={{ marginLeft: "3rem", flaot:"left"}}>
        Chat Application
      </Typography>
      <Button color="primary" onClick={()=>onReset()}  sx={{ float: "right", marginRight:"3rem", marginTop:"-30px"}}>Reset Chat</Button>
      <Box
         data-testid="page-body"
        sx={{
          dispaly: " flex",
          flexDirection: "row",
          padding: "1rem",
          margin: "2rem",
          minHeight: "90vh",
        }}
      >
        <Messages name={id}/>
        <MessageField name={id} />
      </Box>
    </>
  );
};

export default ChatPage;
