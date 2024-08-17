import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Main, Channel, Navbar, VideoDetail, Search } from "..";


const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/channel/:id" element={<Channel />}></Route>
        <Route path="/video/:id" element={<VideoDetail />}></Route>
        <Route path="/search/:id" element={<Search />}></Route>
      </Routes>
    </Box>
  );
};

export default App;
