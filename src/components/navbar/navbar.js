import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";
import SearchBar from "../search-bar/search-bar";
import TwitterIcon from '@mui/icons-material/Twitter';

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: colors.primary,
      }}
    >
      <Link to={"/"} style={{display: 'flex', alignItems: 'center'}}>
      <TwitterIcon fontSize="large" style={{color: "#e3e3e3"}} />
      <span style={{textDecoration: 'none', color: 'white', fontSize: '20px', fontFamily: 'monospace'}}>Tube</span>
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
