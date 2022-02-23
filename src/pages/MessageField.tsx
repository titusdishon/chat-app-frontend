import { Box, InputAdornment, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageField = () => {
  return (
    <TextField
      fullWidth
      name="message"
      type="text"
      sx={{ marginTop: "2rem" }}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SendIcon
              sx={{
                color: "blue",
                cursor: "pointer",
                "&:hover": { color: "green" },
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default MessageField;
