import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({ video, marginTop }) => {
  return (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '326px',
        width: { xs: '356px', md: '320px', border: '1px solid #eee', background: "#fefefe"},
        margin: 'auto',
        marginTop: marginTop
    }}>
         <Link to={`/channel/${video?.id?.channelId ? video?.id?.channelId : video?.id }`}>
        <CardContent sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title.slice(0,12)} sx={{
                borderRadius: '50%',
                height: '180px',
                width: '180px',
                mb: 2,
                border: '1px solid #e3e3e3'
            }} />
            <Typography variant='h6'>
                {video?.snippet?.title.slice(0,15)}
                <CheckCircle sx={{
                    fontSize: '14px',
                    color: 'green',
                    ml: '5px'
                }} />
            </Typography>
            {video?.statistics?.subscriberCount && (
                <Typography sx={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'gray',
                }} >
                    { parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US') } Subscribers
                </Typography>
            )}

        </CardContent>
         </Link>

    </Box>
  )
}

export default ChannelCard