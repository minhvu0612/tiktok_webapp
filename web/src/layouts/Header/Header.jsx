import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Login from './../../components/Login/Login'
//material ui

import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Tooltip from '@mui/material/Tooltip'

import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

import { useNavigate } from 'react-router-dom'
//icon
import KeyboardIcon from '@mui/icons-material/Keyboard'
import LanguageIcon from '@mui/icons-material/Language'
import HelpIcon from '@mui/icons-material/Help'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
//scss
import { logout } from './../../api/login'

import './styles.scss'
import axios from 'axios'
Header.propTypes = {}

function Header(props) {
  let { user } = props
  user = user ? user : JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [onLogin, setOnLogin] = useState(false)
  const onHandleSetting = () => {
    setShow(true)
  }
  const onClose = () => {
    setShow(false)
  }
  const onhandleLogin = () => {
    setOnLogin(!onLogin)
  }
  const onhandleClose = (close) => {
    console.log(close)
    setOnLogin(close)
  }


  const logOut = () => {
    logout().then((res) => {
      if (res.status === 200) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()
      }
    })
  }
  const menuListUnLogined = [
    {
      icon: <LanguageIcon fontSize="medium" />,
      text: <Typography variant="inherit">Tiếng Việt</Typography>,
    },
    {
      icon: <HelpIcon fontSize="medium" />,
      text: <Typography variant="inherit">Phản hồi và trợ giúp</Typography>,
    },
    {
      icon: <KeyboardIcon fontSize="medium" />,
      text: <Typography variant="inherit">Phím tắt trên bàn phím</Typography>,
    },
  ]
  const menuListLogined = [
    {
      icon: <PersonOutlinedIcon fontSize="medium" />,
      text: <Typography variant="inherit">Xem hồ sơ</Typography>,
    },
    {
      icon: <MonetizationOnOutlinedIcon fontSize="medium" />,
      text: <Typography variant="inherit">Nhận xu</Typography>,
    },
    {
      icon: <SettingsOutlinedIcon fontSize="medium" />,
      text: <Typography variant="inherit">Cài đặt</Typography>,
    },
    { divider: <Divider /> },
    {
      icon: <LogoutOutlinedIcon fontSize="medium" />,
      text: (
        <Typography variant="inherit" onClick={logOut}>
          Đăng xuất
        </Typography>
      ),
    },
  ]
  const buttonFunction = [
    {
      icon: (
        <CloudUploadOutlinedIcon
          sx={{ marginRight: '15px', fontSize: '30px' }}
        />
      ),
      href: '/',
      title: <Typography fontSize={18}>{'Tải video lên'}</Typography>,
    },
    {
      icon: <SendOutlinedIcon sx={{ marginRight: '15px', fontSize: '30px' }} />,
      href: '/',
      title: <Typography fontSize={18}>{'Tin nhắn'}</Typography>,
    },
    {
      icon: (
        <MessageOutlinedIcon sx={{ marginRight: '15px', fontSize: '30px' }} />
      ),
      href: '/',
      title: <Typography fontSize={18}>{'Hộp thư'}</Typography>,
    },
  ]
  return (
    <div className="header">
      <div className="header__container">
        <img src="/image/logo.svg" className="logo_img" />
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            borderRadius: 8,
            backgroundColor: 'rgb(241, 241, 242)',
            minWidth: '410px',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tìm kiếm tài khoản và video"
            inputProps={{ 'aria-label': 'search google maps' }}
            className="search_bar"
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <div className="header__btn">
          <Paper
            className="setting_popup"
            sx={{
              width: 230,
              position: 'absolute',
              top: '85%',
              visibility: show ? 'visible' : 'hidden',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
            }}
            onMouseEnter={onHandleSetting}
            onMouseLeave={onClose}
          >
            <MenuList>
              {user
                ? menuListLogined.map((menu, index) => {
                    return (
                      <div key={index}>
                        {menu.divider ? menu.divider : null}
                        {menu.divider ? null : (
                          <MenuItem key={index}>
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            {menu.text}
                          </MenuItem>
                        )}
                      </div>
                    )
                  })
                : menuListUnLogined.map((menu, index) => {
                    return (
                      <MenuItem key={index}>
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        {menu.text}
                      </MenuItem>
                    )
                  })}
            </MenuList>
          </Paper>
          {user ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {buttonFunction.map((button, index) => {
                return (
                  <Tooltip key={index} title={button.title}>
                    <Link
                      color="inherit"
                      href={button.href}
                      sx={{ color: 'black' }}
                    >
                      {button.icon}
                    </Link>
                  </Tooltip>
                )
              })}
              <Avatar
                alt={user.name}
                src={user.avatar}
                className="setting_icon"
                onMouseEnter={onHandleSetting}
                onMouseLeave={onClose}
                sx={{ width: '35px', height: '35px' }}
              ></Avatar>
            </div>
          ) : (
            <React.Fragment>
              <Link href="#" underline="hover" className="header__btn--upload">
                Tải lên
              </Link>
              <Button
                variant="contained"
                size="medium"
                className="header__btn--login"
                onClick={onhandleLogin}
              >
                Đăng nhập
              </Button>
              <MoreVertIcon
                className="setting_icon"
                onMouseEnter={onHandleSetting}
                onMouseLeave={onClose}
              />
            </React.Fragment>
          )}
        </div>
      </div>
      <Login modal={onLogin} onHandleClose={onhandleClose}></Login>
    </div>
  )
}

export default Header
