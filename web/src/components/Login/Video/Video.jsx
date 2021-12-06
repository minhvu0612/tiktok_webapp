import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import ListItemButton from '@mui/material/ListItemButton'

//icon
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SmsIcon from '@mui/icons-material/Sms'
import ShareSharpIcon from '@mui/icons-material/ShareSharp'
//css
import './styles.scss'
import { IconButton } from '@mui/material'

import { useNavigate, useLocation } from 'react-router-dom'

Video.propTypes = {}
function Video(props) {
  const primaryColor = '#fe2c55'
  const navigate = useNavigate()
  const [video, setVideo] = useState()
  useEffect(() => {
    const videoData = {
      id: 1,
      url: 'https://v16.tiktokcdn.com/a0b33424378237202c49dc787cf7bd58/61a7e01d/video/tos/alisg/tos-alisg-pve-0037/540933125a60494288d96075cba2b09b/?a=1180&br=1334&bt=667&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=wZmo9Fpckag3-I&l=2021120114500701025100318914370F8C&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2l3cTY6ZjVwOTMzODgzNEApNjQ8aTNpZmVpN2k4O2g2N2c0ZGVfcjRfb2NgLS1kLy1zczQzYzZhMjA2LS4uLzBeYV86Yw%3D%3D&vl=&vr=',
      status: 'I’m gonna edit dis😼',
      user: {
        avatar: './image/abe.jpg',
        name: 'Baroibeo',
        nickName: 'Be heo <3',
      },
      hashTag: ['lamdep', 'thethao'],
      musicBackground: {
        icon: <MusicNoteIcon fontSize="small" />,
        name: 'nhạc nền - Hoàng Văn Nguyên',
        url: '',
      },
      like: 300000,
      comment: 200000,
      share: 200,
    }
    setVideo(videoData)
  }, [])
  return (
    <div>
      {video ? (
        <List
          className="video"
          sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={video.user.name}
                src={video.user.avatar}
                sx={{ width: '56px', height: '56px', marginRight: '15px' }}
              />
            </ListItemAvatar>
            <ListItemText
              component="div"
              className="text"
              primary={
                <React.Fragment>
                  <Link
                    className="video-user__name"
                    sx={{ cursor: 'pointer' }}
                    underline="hover"
                    color="black"
                  >
                    <Typography
                      sx={{
                        display: 'inline',
                        marginRight: '8px',
                        fontWeight: 'bold',
                      }}
                      component="span"
                      variant="h6"
                      color="text.primary"
                    >
                      {video.user.name}
                    </Typography>
                  </Link>
                  <Link
                    sx={{ cursor: 'pointer', color: 'gray' }}
                    underline="none"
                  >
                    {video.user.nickName}
                  </Link>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {video.status}
                  </Typography>

                  {/* <MusicNoteIcon fontSize="small" /> */}
                  {video.hashTag.map((tag, index) => (
                    <Link
                      key={index}
                      underline="hover"
                      sx={{
                        display: 'inline',
                        cursor: 'pointer',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      {`#${tag}`}
                    </Link>
                  ))}
                  <Link
                    sx={{ display: 'flex', color: 'black', marginTop: '8px' }}
                    underline="hover"
                  >
                    {video.musicBackground.icon}
                    {video.musicBackground.name}
                  </Link>
                  <Typography component="div" sx={{ display: 'flex' }}>
                    <video
                      className="video__play"
                      src={video.url}
                      controls
                      autoPlay
                      muted
                      loop={true}
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        console.log(e.target)
                        navigate(`/${video.user.name}/video/${video.id}`)
                        window.location.reload()
                      }}
                    ></video>
                    <Typography component="div" className="btn-group">
                      <IconButton
                        sx={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: 'rgba(0, 0, 0, 0.06)',
                        }}
                      >
                        <FavoriteIcon
                          fontSize="large"
                          sx={{ color: 'black' }}
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: 'rgba(0, 0, 0, 0.06)',
                        }}
                      >
                        <SmsIcon fontSize="large" sx={{ color: 'black' }} />
                      </IconButton>
                      <IconButton
                        sx={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: 'rgba(0, 0, 0, 0.06)',
                        }}
                      >
                        <ShareSharpIcon
                          fontSize="large"
                          sx={{ color: 'black' }}
                        />
                      </IconButton>
                    </Typography>
                  </Typography>
                </React.Fragment>
              }
            />
            <Button
              className="log-in_btn"
              variant="outlined"
              size="small"
              sx={{
                color: primaryColor,
                borderColor: primaryColor,
                fontWeight: 'bold',
                float: 'right',
              }}
            >
              Follow
            </Button>
          </ListItem>
          <ListItem></ListItem>
        </List>
      ) : null}
    </div>
  )
}

export default Video
