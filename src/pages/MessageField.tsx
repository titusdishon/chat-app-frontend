import { Button, InputAdornment, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { socket } from "../utils/clientApi";

type Props = {
  name: string;
};
const MessageField: React.FC<Props> = ({ name }) => {
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    socket.emit("chat message", { id: name, text: message });
    setMessage("");
  };

  return (
    <TextField
      fullWidth
      maxRows={1}
      multiline
      name="message"
      type="text"
      value={message || ""}
      sx={{ marginTop: "2rem" }}
      variant="outlined"
      onChange={(event) => setMessage(event.target.value)}
      inputProps={{ "data-testid": "message" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button data-testid="send-button" disabled={message === ""}>
              <SendIcon
                sx={{
                  color: "#43b2e6",
                  cursor: "pointer",
                  "&:hover": { color: "blue" },
                }}
                onClick={onSubmit}
              />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default MessageField;

