import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Box height={"60vh"}>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
      >
        <CircularProgress/>
      </Stack>
    </Box>
  );
};

export default Loader;
