import React, { useEffect, useState, useLayoutEffect } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import './nortifications.scss'
import { onGetNorti, markAsRead } from '../../api/nortifications'
import { Link } from 'react-router-dom'
const Nortification = ({ sx, norti: newNorti, props, onSetNortiUnread }) => {
  const [listNortiDefault, setListNortiDefault] = useState([])
  const markRead = async (id) => {
    const response = await markAsRead(id)
    if (response.success) {
      console.log('success')
    }
  }
  useLayoutEffect(() => {
    const fetchNorti = async () => {
      const response = await onGetNorti(localStorage.getItem('id'))
      response.data.map((norti) => {
        switch (norti.nortificable_type) {
          case 'App\\Models\\TiktokApi\\Follows':
            norti.content = props.lang('user.follow_norti')
            norti.url = `/users/${norti.sender.id}`
            break
          case 'App\\Models\\TiktokApi\\Comments':
            norti.content = props.lang('user.comment_norti')
            norti.url = `/videos/${norti.video.id}#comment_${norti.nortificable_id}`
            break
          default:
            break
        }
      })
      setListNortiDefault(response.data.reverse())
      console.log(response.data.filter((norti) => norti.read === 0).length)
      onSetNortiUnread(response.data.filter((norti) => norti.read === 0).length)
      console.log(response.data)
    }
    fetchNorti()
  }, [])
  useEffect(() => {
    console.log(newNorti)
    if (Object.keys(newNorti).length > 0)
      setListNortiDefault([...listNortiDefault, newNorti])
  }, [newNorti])
  console.log(listNortiDefault)
  return (
    <>
      {listNortiDefault.length > 0 ? (
        <List sx={sx}>
          {listNortiDefault.map((norti, index) => (
            <Link key={index} to={norti.url} style={{ textDecoration: 'none' }}>
              <ListItem
                alignItems="flex-start"
                className="norti_item"
                onClick={() => {
                  console.log('in')
                  markRead(norti.id)
                }}
                sx={{ opacity: !norti.read ? '1' : '0.5' }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={norti?.sender.fullname}
                    src={norti?.sender.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          fontSize: '1em',
                          fontWeight: 'bold',
                        }}
                        variant="h1"
                        color="text.primary"
                      >
                        {norti?.sender.username}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: 'block',
                          fontSize: '1em',
                          color: 'rgba(0, 0, 0, 0.5)',
                          fontWeight: 'bold',
                        }}
                        variant="body2"
                        color="text.primary"
                      >
                        {norti?.content}
                      </Typography>
                      <Typography
                        sx={{ display: 'block' }}
                        variant="body2"
                        color="text.primary"
                      >
                        {norti?.created_at + 'h'}
                      </Typography>
                    </React.Fragment>
                  }
                />
                {norti?.hasOwnProperty('video') ? (
                  <img src={norti?.video.background_video} width="40px" />
                ) : null}
              </ListItem>
              {/* <Divider variant="inset" component="li" /> */}
            </Link>
          ))}
        </List>
      ) : (
        <div
          style={{
            ...sx,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ display: 'block', fontSize: '1em', fontWeight: 'bolder' }}
            variant="body2"
            color="text.primary"
          >
            {props.lang('user.empty_norti')}
          </Typography>
        </div>
      )}
    </>
  )
}

export default React.memo(Nortification)
