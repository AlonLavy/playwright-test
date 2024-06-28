import { TextField, Typography } from "@mui/material";
import { useState } from "react";

export const MultipleTextField = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <>
      <TextField
        type="number"
        defaultValue={value}
        onChange={(event) => {
          setValue(parseFloat(event.target.value));
        }}
        inputProps={{ "data-testid": "textfield" }}
      />
      <Typography data-testid="typography">{value * 10}</Typography>
    </>
  );
};
