import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'

//icon
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import './styles.scss'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import styles from './../../assets/scss/variables.scss'
//api call
import { getUsers } from './../../api/users'
import { getHashtags } from './../../api/hashtags'
Sidebar.propTypes = {}

function Sidebar(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [users, setUsers] = useState([])
  const [hashtags, setHashtags] = useState([])
  const [visible, setVisible] = useState(5)
  const primaryColor = '#fe2c55'
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }
  useEffect(async () => {
    const response = await getUsers()
    const hashtags = await getHashtags()
    setUsers(response.data)
    setHashtags(hashtags.data)
    console.log(hashtags.data)
  }, [])
  return (
    <div className="sidebar">
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            disableTouchRipple
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            sx={{ color: selectedIndex == 0 ? primaryColor : 'inherit' }}
          >
            <ListItemIcon>
              <HomeIcon
                sx={{ color: selectedIndex == 0 ? primaryColor : 'inherit' }}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className="item-select"
              primary="For You"
            />
          </ListItemButton>
          <ListItemButton
            disableTouchRipple
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            sx={{ color: selectedIndex == 1 ? primaryColor : 'inherit' }}
          >
            <ListItemIcon>
              <PeopleAltIcon
                sx={{ color: selectedIndex == 1 ? primaryColor : 'inherit' }}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className="item-select"
              primary="Following"
            />
          </ListItemButton>
        </List>
        <Divider sx={{ marginBottom: '15px', marginTop: '5px' }} />

        {!localStorage.getItem('token') ? (
          <React.Fragment>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              sx={{ color: 'rgba(22, 24, 35,0.5)' }}
            >
              Log in to follow creators, like videos, and view comments
            </Typography>
            <Button
              className="log-in_btn"
              variant="outlined"
              fullWidth={true}
              sx={{
                height: '50px',
                marginBottom: '10px',
                color: primaryColor,
                borderColor: primaryColor,
                fontWeight: 'bold',
              }}
            >
              Log in
            </Button>
            <Divider sx={{ marginTop: '15px' }} />
          </React.Fragment>
        ) : null}

        <div className="suggest-accounts">
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{
                    display: 'inline',
                    fontWeight: 'bold',
                  }}
                  component="span"
                  // variant="body2"
                  color="text.primary"
                >
                  Suggested accounts
                </Typography>
              }
            ></ListItemText>
            {users.slice(0, visible).map((user) => (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  // disableTypography
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline', fontWeight: 'bold' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {user.email.split('@')[0]}
                      </Typography>
                      {user.checked === 1 ? (
                        <CheckCircleOutlineIcon
                          sx={{
                            fontSize: '14px',
                            position: 'relative',
                            top: '1px',
                            left: '2px',
                          }}
                        />
                      ) : null}
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline', color: 'gray' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {user.name}
                      </Typography>
                    </React.Fragment>
                  }
                  sx={{ width: 30 }}
                />
                {/* <ListItemIcon
                children={} />}
              ></ListItemIcon> */}
              </ListItem>
            ))}

            {/* <ListItem> */}
            <Button
              disableTouchRipple
              disableFocusRipple
              disableRipple
              disableElevation
              className="btn"
              onClick={() => {
                if (visible > 5) setVisible(5)
                else {
                  setVisible(users.length)
                }
              }}
            >
              <Typography
                sx={{
                  display: 'inline',
                  fontWeight: 'bold',
                  color: '#fe2c55',
                  textTransform: 'none',
                }}
                component="span"
                variant="body2"
              >
                {visible <= 5 ? 'See all' : 'Shorten'}
              </Typography>
            </Button>
            {/* </ListItem> */}
          </List>
        </div>
        <Divider sx={{ marginBottom: '15px', marginTop: '5px' }} />
        <Typography
          sx={{ color: 'gray', marginBottom: '15px' }}
          component="div"
          color="text.primary"
        >
          Khám Phá
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            bgcolor: 'background.paper',
            width: '100%',
            gap: '8px',
          }}
        >
          {hashtags.map((hashtag, index) => (
            <Button
              key={index}
              className="hashtag"
              variant="outlined"
              size="small"
              component="span"
              startIcon={<MusicNoteIcon />}
              sx={{ marginRight: '5px' }}
            >
              {hashtag.name}
            </Button>
          ))}
        </Box>
        <Divider sx={{ marginBottom: '15px', marginTop: '20px' }} />
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            About
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Newrooms
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Contact
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Careers
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            ByteDance
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            TikTok for Good
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Advertise
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Developers
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Transparency
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Help
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Safety
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Privacy
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Creator Portal
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            Community Guidelines
          </Link>
        </Box>
        <Box component="div">
          <Typography
            sx={{
              color: 'rgba(22, 24, 35,0.5)',
              fontSize: '12px',
              fontWeight: '600',
              marginTop: '10px',
            }}
            variant="h1"
          >
            © 2021 TikTok
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Sidebar
