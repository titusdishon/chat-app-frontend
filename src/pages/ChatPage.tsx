import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import MessageField from "./MessageField";
import Messages from "./Messages";

const ChatPage: React.FC = () => {
  return (
    <>
      <Typography variant="h5" sx={{ marginLeft:"3rem" }}>
        Chat Application
      </Typography>
      <Box
        sx={{
          dispaly: " flex",
          flexDirection: "row",
          padding: "1rem",
          margin: "2rem",
          minHeight: "90vh",
        }}
      >
        <Messages />
        <MessageField />
      </Box>
    </>
  );
};

export default ChatPage;
