/**
 * Text area field to supply a new message
 */
import {Button, InputAdornment, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useContext, useState} from "react";
import {socket} from "../utils/clientApi";
import {UserContext} from "../context/DataProvider";

const MessageField = () => {
    const [message, setMessage] = useState("");
    const userName = useContext(UserContext);

    const onSubmit = () => {
        socket.emit("chat message", {id: userName, text: message});
        setMessage("");
    };

    return (
        <>
            <TextField
                fullWidth
                maxRows={1}
                multiline
                name="message"
                type="text"
                value={message}
                variant="outlined"
                onChange={(event) => setMessage(event.target.value)}
                inputProps={{"data-testid": "message"}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button data-testid="send-button" disabled={message.trim() === ""}>
                                <SendIcon sx={{color: "#43b2e6", cursor: "pointer", "&:hover": {color: "blue"},}}
                                          onClick={onSubmit}/>
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
        </>
    );
};

export default MessageField;

