import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import {  useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import ChannelCard from "../channel-card/channel-card";
import { Videos } from "..";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail?.items[0]);
        const dataVideo = await ApiService.fetching(
          `search?channelId=${id}&part=snippet&order=date&type=video`
        );
        setVideos(dataVideo?.items);
      } catch (error) {
        console.log(error);
      }
    }
    getData()

  }, [id])

  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"300px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={'90v%'}>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Channel;
