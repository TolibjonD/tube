import { useState } from "react";
import { colors } from "../../constants/colors";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setvalue] = useState("");

  const navigate = useNavigate()

  const searchingHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`search/${value}`)
      setvalue('')
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={searchingHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search_bar"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
