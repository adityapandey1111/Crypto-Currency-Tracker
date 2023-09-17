import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./styles.css";

function SelectDays({ days, handleDaysChange, noText }) {
  return (
    <div className="select-days">
      {!noText && <p>Price Change in </p>}
      <Select
        value={days}
        onChange={handleDaysChange}
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        className={noText && "select-coin"}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={14}>14 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={150}>150 Days</MenuItem>
        <MenuItem value={180}>180 Days</MenuItem>
        <MenuItem value={210}>210 Days</MenuItem>
        <MenuItem value={240}>240 Days</MenuItem>
        <MenuItem value={270}>270 Days</MenuItem>
        <MenuItem value={300}>300 Days</MenuItem>
        <MenuItem value={330}>330 Days</MenuItem>
        <MenuItem value={365}>365 Days</MenuItem>

      </Select>
    </div>
  );
}

export default SelectDays;
