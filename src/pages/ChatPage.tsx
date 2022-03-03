/**
 * Home page
 */
import {Box, Button, Typography} from "@mui/material";
import React from "react";
import {socket} from "../utils/clientApi";
import MessageField from "./MessageField";
import Messages from "./Messages";

const ChatPage = () => {
    const onReset = () => {
        socket.emit("reset chat");
    };
    return (
        <>
            <header style={{display: "flex", width: "80%", margin: "1rem auto 0 auto", justifyContent: "space-between"}}>
                <Typography variant="h5" data-testid="app-heading">Ping Me</Typography>
                <Button color="primary" onClick={() => onReset()} variant="outlined">Reset Chat</Button>
            </header>
            <Box data-testid="page-body"
                 sx={{flexDirection: "row", paddingTop: "1rem", width: "80%", margin: "auto"}}>
                <Messages />
                <MessageField/>
            </Box>
        </>
    );
};

export default ChatPage;
