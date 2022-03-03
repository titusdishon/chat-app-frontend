/**
 * Chat box to hold the messages send and received
 */

import {
  Alert,
  Avatar,
  Box,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import { socket } from "../utils/clientApi";
import Card from "@mui/material/Card";
import {UserContext} from "../context/DataProvider";

type response = {
  id: string;
  text: string;
};

const Messages = () => {
  const userName=useContext(UserContext);
  const [response, setResponse] = useState<response[]>([]);
  useEffect(() => {
    socket.on("chat message", (data) => {
      setResponse([...data]);
    });
  }, []);

  const checkMyTexts = (message: any) => {
    return message.id === userName;
  };

  return (
    <>
      <Box data-testid="chat-box"
        sx={{display: " flex", flexDirection: "row", border: "1px solid green", padding: "1rem", height: "70vh", margin:"2rem 0", borderRadius: "0.4rem",}}
      >
        <List sx={{ width: "100%" }} data-testid="chat-list">
          {response.length > 0 ? (
            response.map((message: any, key) => (
              <ListItem
                data-testid="chat"
                key={key}
                sx={{width: "100%", display: "flex", justifyContent: checkMyTexts(message) ? "flex-start" : "flex-end",}}
              >
                <Card data-testid="chat-card"
                  sx={{ minWidth: "10rem",
                    maxWidth: "50%",
                    boxShadow: "-9px 10px 58px -5px rgba(0,0,0,0.22)",
                    float: checkMyTexts(message) ? "left" : "right",
                    whiteSpace: "pre",
                    border: checkMyTexts(message) ? "1px solid #72e891" : "1px solid #43b2e6",
                    alignSelf: "right",
                    "&:hover": {
                      backgroundColor: checkMyTexts(message) ? "#72e891" : "#43b2e6",
                      opacity: [0.9, 0.8, 0.7],
                    },
                    borderBottomRightRadius: "2rem",
                    borderBottomLeftRadius: "2rem",
                    borderTopLeftRadius: checkMyTexts(message) ? "0" : "2rem",
                    borderTopRightRadius: checkMyTexts(message) ? "2rem" : "0",
                  }}
                >
                  <CardContent>
                    <Avatar
                      sx={{backgroundColor: checkMyTexts(message) ? "#72e891" : "#43b2e6",
                        fontSize: "1rem",
                        ...(checkMyTexts(message) && {
                          marginTop: "-1.7rem",
                          marginLeft: "-1.2rem",
                        }),
                        ...(!checkMyTexts(message) && {
                          float: "right",
                          marginTop: "-1.7rem",
                          marginRight: "-1.2rem",
                        }),
                      }}
                    >
                      {message.id}
                    </Avatar>
                    <br />
                    <Typography variant="body2" sx={{display: "inline-block", whiteSpace: "pre-line",}}>
                      {message.text}
                    </Typography>
                  </CardContent>
                </Card>
              </ListItem>
            ))
          ) : (
            <Alert severity="info">No chats yet!</Alert>
          )}
        </List>
      </Box>
    </>
  );
};

export default Messages;
