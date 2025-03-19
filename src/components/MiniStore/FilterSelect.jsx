import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const FilterSelect = ({ selectedBrand, onBrandChange }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 2, marginTop: 2, boxShadow: 2 }}>
      <InputLabel>Выберите бренд</InputLabel>
      <Select
        value={selectedBrand}
        onChange={(event) => onBrandChange(event.target.value)}
        label="Выберите бренд"
      >
        <MenuItem value="">Все бренды</MenuItem>
        <MenuItem value="Apple">Apple</MenuItem>
        <MenuItem value="Samsung">Samsung</MenuItem>
        <MenuItem value="Xiaomi">Xiaomi</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
