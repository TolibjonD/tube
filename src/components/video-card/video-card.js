import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Card sx={{ width: {xs: "100%", sm: "360px", md: "320px", border: '1px solid #eee'}, boxShadow: "none", borderRadius: "none" }}>
     <Link to={`video/${video?.id?.videoId}`}>
     <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{ width: "360px", height: "200px" }}
      />
     </Link>
      <CardContent
        sx={{
          background: colors.card,
          height: "200px",
          position: "relative",
        }}
      >
        <>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          
          <Link to={`video/${video?.id?.videoId}`} style={{textDecoration: 'none', color: colors.secondary}}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          </Link>
          <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={'gray'}>
            {video?.snippet?.channelTitle.slice(0, 40)}
            <CheckCircle sx={{color: "green", fontSize: "12px", ml: "5px", mt: "5px"}} />
          </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
