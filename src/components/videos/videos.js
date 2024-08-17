import { Box, Stack } from "@mui/material"
import {VideoCard, ChannelCard, Loader} from ".."

const Videos = ({ videos }) => {
    if (!videos.length) return <Loader /> 
    
  return (
   <Stack 
   width={'100%'}
   direction={'row'}
   flexWrap={'wrap'}
   justifyContent={{xs: "center",sm: 'center', md: 'start'}}
   alignItems={'center'}
   gap={2}
   mx={"0 auto"}
   p={'10px'}
   >
    { videos.map(item => (
        <Box key={item.id.videoId}>
            { item.id.videoId &&  <VideoCard video={item} /> }
            { item.id.channelId &&  <ChannelCard video={item} /> }
        </Box>
    )) }
   </Stack>
  )
}

export default Videos