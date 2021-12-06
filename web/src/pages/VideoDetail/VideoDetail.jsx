import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'

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
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import CodeIcon from '@mui/icons-material/Code'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TwitterIcon from '@mui/icons-material/Twitter'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
//css
import './styles.scss'
import { IconButton, InputBase, Tooltip } from '@mui/material'
import Login from './../../components/Login/Login'

import './styles.scss'
import { Box, padding } from '@mui/system'
import CancelOutlined from '@mui/icons-material/CancelOutlined'
const VideoDetail = () => {
  const navigate = useNavigate()
  const [onLike, setOnLike] = useState(false)
  const [onLogin, setOnLogin] = useState(false)
  const primaryColor = '#fe2c55'
  const [video, setVideo] = useState()
  const styles = {
    backgroundColor: 'rgb(241, 241, 242)',
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: !localStorage.getItem('token') ? '60px' : '0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }
  const shareIcons = [
    {
      icon: <FacebookOutlinedIcon />,
      tooltipName: 'Share to Facebook',
    },
    {
      icon: <WhatsAppIcon />,
      tooltipName: 'Share to Whatsapp',
    },
    {
      icon: <TwitterIcon />,
      tooltipName: 'Share to Twitter',
    },
    {
      icon: <CodeIcon />,
      tooltipName: 'Embbed',
    },
  ]
  const onhandleClose = (close) => {
    console.log(close)
    setOnLogin(close)
  }
  const onhandleLogin = () => {
    setOnLogin(!onLogin)
  }
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
        icon: (
          <MusicNoteIcon
            fontSize="small"
            sx={{ transform: 'translateX(-5px)' }}
          />
        ),
        name: 'nhạc nền - Hoàng Văn Nguyên',
        url: '',
      },
      like: 300000,
      comment: 200000,
      share: 200,
    }
    console.log('a')
    setVideo(videoData)
  }, [])
  return (
    <div className="video-detail">
      {video ? (
        <div style={{ display: 'flex' }}>
          <Link href="/">
            <CancelOutlined
              className="btn-cancle"
              sx={{
                position: 'absolute',
                zIndex: '1',
                left: '1%',
                top: '2%',
                color: 'white',
                cursor: 'pointer',
              }}
              fontSize="large"
            />
          </Link>
          <div
            className="left_column"
            style={{
              height: '100vh',
              backgroundColor: 'black',
            }}
          >
            <video
              className="video__play"
              src={video.url}
              controls
              // autoplay="autoplay"
              loop="true"
            ></video>
          </div>
          <div
            className="right_column"
            style={{
              paddingTop: '30px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              className="video__play__header"
              style={{ paddingRight: '25px', paddingLeft: '25px' }}
            >
              <List sx={{ bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt={video.user.name}
                      src={video.user.avatar}
                      sx={{
                        width: '40px',
                        height: '40px',
                        marginRight: '15px',
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
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
                              fontSize: '1.125em',
                            }}
                            component="div"
                            color="text.primary"
                          >
                            {video.user.name}
                          </Typography>
                        </Link>
                        <Link
                          sx={{ cursor: 'pointer', color: 'gray' }}
                          underline="none"
                          component="div"
                        >
                          {video.user.nickName}
                        </Link>
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
              <Box className="description" sx={{ wordWrap: 'break-word' }}>
                <Typography
                  sx={{
                    display: 'inline',
                    fontWeight: '400',
                    fontSize: '1em',
                    color: 'rgba(22, 24, 35, 0.7)',
                  }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {video.status}
                </Typography>

                {video.hashTag.map((tag) => (
                  <Link
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
              </Box>
              <Link
                sx={{
                  display: 'flex',
                  color: 'black',
                  marginTop: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                underline="hover"
              >
                {video.musicBackground.icon}
                {video.musicBackground.name}
              </Link>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '25px',
                }}
              >
                <div className="like-comment">
                  <Button
                    startIcon={<FavoriteBorderOutlinedIcon />}
                    className="btn"
                    sx={{ color: onLike ? 'red' : 'inherit' }}
                    disableRipple
                    onClick={() => {
                      setOnLike(!onLike)
                    }}
                  >
                    {video.like}
                  </Button>
                  <Button
                    startIcon={<CommentOutlinedIcon />}
                    color="inherit"
                    className="btn"
                    disableRipple
                  >
                    {video.comment}
                  </Button>
                </div>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    columnGap: '10px',
                  }}
                >
                  <Typography component="span">Share to</Typography>

                  {shareIcons.map((icon) => {
                    return (
                      <Tooltip
                        title={
                          <Typography sx={{ fontSize: '15px' }}>
                            {icon.tooltipName}
                          </Typography>
                        }
                        placement="top"
                        arrow
                      >
                        {icon.icon}
                      </Tooltip>
                    )
                  })}
                </Box>
              </Box>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  border: '1px solid gray',
                  marginTop: '20px',
                }}
              >
                <InputBase
                  sx={{
                    backgroundColor: 'rgb(241, 241, 242)',
                    width: '70%',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    fontSize: '12px',
                    padding: '3px',
                  }}
                  type="text"
                  value={video.url}
                ></InputBase>
                <Button
                  style={{
                    backgroundColor: 'transparent',
                    textTransform: 'none',
                    textAlign: 'center',
                    width: '30%',
                  }}
                  variant="text"
                  disableRipple
                  disableTouchRipple
                  onClick={() => {
                    navigator.clipboard.writeText(video.url)
                  }}
                >
                  Sao chép liên kết
                </Button>
              </Box>
            </div>
            <Divider sx={{ marginTop: '30px' }} />
            <Box component="div" sx={styles}>
              {!localStorage.getItem('token') ? (
                <React.Fragment>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', fontSize: '24px' }}
                  >
                    Đăng nhập để xem video
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: '200',
                      color: 'gray',
                      fontSize: '1em',
                      marginTop: '15px',
                      marginBottom: '15px',
                    }}
                  >
                    Đăng nhập để xem bình luận và thích video.
                  </Typography>
                  <Button
                    variant="contained"
                    size="medium"
                    className="header__btn--login"
                    fullWidth
                    sx={{ marginBottom: '20px' }}
                    disableRipple
                    onClick={onhandleLogin}
                  >
                    Đăng nhập
                  </Button>
                  <Box component="div">
                    <Typography variant="subtitle2" component="span">
                      Bạn không có tài khoản?
                    </Typography>
                    <Button className="register">Đăng ký</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Box
                    className="input_message"
                    sx={{
                      height: '10%',
                      backgroundColor: 'white',
                      position: 'fixed',
                      bottom: '0px',
                    }}
                    component="form"
                  ></Box>
                </React.Fragment>
              )}
            </Box>
          </div>

          <Login modal={onLogin} onHandleClose={onhandleClose}></Login>
        </div>
      ) : null}
    </div>
  )
}

VideoDetail.propTypes = {}
export default VideoDetail
