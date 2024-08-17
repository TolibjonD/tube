import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service"
import { Box, Chip, Typography, Stack, Avatar } from "@mui/material"
import ReactPlayer from "react-player"
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag } from "@mui/icons-material"
import { Videos } from ".."

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState([])
  const [relaedVideo, setrelaedVideo] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    const getData = async () => {
      try {
        const data =  await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
        setvideoDetail(data.items[0])
        const relatedData = await ApiService.fetching(`search?part=snippet&relatedToVideoID=${id}&type=video`)
        setrelaedVideo(relatedData.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])
    
  // const {
  //   snippet:{ title, channelId, channelTitle, description, tags, thumbnails },
  //   statistics: {viewCount, likeCount, commentCound}
  // }

  return (
    <Box minHeight={'90vh'} mb={10}>
      <Box display={'flex'} sx={{flexDirection: {xs: 'column', md: 'row'}}}>
        <Box width={{xs: '100%', md: '75%'}}>
          <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className='react_player'
          controls
          />
          <Typography variant="h5" fontWeight={'bold'} p={2}>
            {videoDetail?.snippet?.title}
          </Typography>
          {videoDetail?.snippet?.tags.map((item, idx) => (
            <Chip
            label={item}
            key={idx}
            sx={{marginTop: '10px', cursor:'pointer', ml: '10px'}}
            deleteIcon={<Tag />}
            onDelete={() => {}}
            variant="outlined"
            />
          ))}
          <Typography variant="subtitle2" p={2} sx={{opacity: '0.7'}}>
            {videoDetail?.snippet?.description}
          </Typography>
          <Stack direction={'row'} gap={'20px'} alignItems={'center'} py={1} px={2}>
          <Stack sx={{opacity: 0.7}} direction={'row'} alignItems={'center'} gap={'3px'}>
              <FavoriteOutlined />
              { parseInt(videoDetail?.statistics?.viewCount).toLocaleString() } views
            </Stack>
            <Stack sx={{opacity: 0.7}} direction={'row'} alignItems={'center'} gap={'3px'}>
              <MarkChatRead />
              { parseInt(videoDetail?.statistics?.likeCount).toLocaleString() } likes
            </Stack>
            <Stack sx={{opacity: 0.7}} direction={'row'} alignItems={'center'} gap={'3px'}>
              <FavoriteOutlined />
              { parseInt(videoDetail?.statistics?.commentCount).toLocaleString() } comments
            </Stack>


          </Stack>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            marginTop={"5px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={videoDetail?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={'gray'}>
            {videoDetail?.snippet?.channelTitle.slice(0, 40)}
            <CheckCircle sx={{color: "green", fontSize: "12px", ml: "5px", mt: "5px"}} />
          </Typography>
          </Stack>
        </Link>

        </Box>
        <Box 
        width={{xs: '100%', md: '25%'}}
        px={2}
        py={{md: 1, xs: 5}}
        justifyContent={'center'}
        alignItems={'center'}
        overflow={'scroll'}
        maxHeight={'150vh'}
        >
          <Videos videos={relaedVideo} />
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetail