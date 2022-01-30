import React, { useState, useEffect, useRef } from 'react'
import { Mention, MentionsInput } from 'react-mentions'
import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import Picker from 'emoji-picker-react'
import './styles.scss'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined'
import { Tooltip } from '@mui/material'
//api
import { onLoadAll } from './../../api/loadAllUser'
import { loadHashtag } from './../../api/hashtag'
import { Box, padding } from '@mui/system'
import { onFollowingUserList } from '../../api/follows'

const InputWithMention = React.forwardRef(
  ({ handleChange, content, styles, suggestionsStyles }, innerref) => {
    const [showEmoji, setShowEmoji] = useState(false)
    const [users, setUsers] = useState([])
    const [hashTags, setHashTags] = useState([])
    const debounce = useRef(null)
    useEffect(() => {
      const userApi = async () => {
        const res = await onFollowingUserList(localStorage.getItem("id"));
        const arr = []
        res.data.following.forEach((user) => {
          arr.push(user.user_2);
        })
        arr.forEach((x) => {
          x.display = x.username;
        })
        setUsers(arr);
      }
      const hashTagsApi = async () => {
        const response = await loadHashtag();
        //console.log(response.data);
        response.data.data.forEach((hashTag) => {
          hashTag.display = hashTag.hashtag_name;
          hashTag.views = 300
        })
        setHashTags(response.data.data);
      }
      userApi()
      hashTagsApi()
    }, [])
    const onEmojiClick = (event, emojiObject) => {
      handleChange(content.concat(emojiObject.emoji))
    }
    return (
      <div className='div--input' style={styles}>
        <MentionsInput
          ref={innerref}
          className="mentions"
          singleLine
          value={content}
          style={!suggestionsStyles ? defaultStyle : suggestionsStyles}
          placeholder={'Add a comment'}
          a11ySuggestionsListLabel={'Suggested mentions'}
          onChange={(event, newValue, newPlainTextValue, mentions) => {
            handleChange(event.target.value)
          }}
        >
          <Mention
            className="mentions_mention"
            trigger="@"
            data={users}
            renderSuggestion={(
              entry,
              search,
              highlightedDisplay,
              index,
              focused
            ) => {
              return (
                <ListItem
                  alignItems="flex-start"
                  component="div"
                  sx={{
                    justifyContent: 'center',
                    // borderBottom: '1px solid rgba(0,0,0,0.15)',
                    paddingLeft: '10px',
                  }}
                >
                  <ListItemAvatar sx={{ alignSelf: 'center' }}>
                    <Avatar
                      alt=""
                      sx={{ width: '30px', height: '30px' }}
                      src={entry.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          display: 'inline',
                          fontWeight: 'bold',
                          fontSize: '16px',
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {entry.username}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline', fontSize: '12px' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {entry.name}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              )
            }}
          />
          {suggestionsStyles ? (
            <Mention
              markup="#[__display__](__id__)"
              className="mentions_mention"
              trigger="#"
              data={hashTags}
              style={defaultMentionStyle}
              renderSuggestion={(
                entry,
                search,
                highlightedDisplay,
                index,
                focused
              ) => {
                return (
                  <ListItem
                    alignItems="center"
                    component="div"
                    sx={{
                      justifyContent: 'center',
                      // borderBottom: '1px solid rgba(0,0,0,0.15)',
                      paddingLeft: '10px',
                    }}
                    secondaryAction={
                      <Typography component="span">{entry.views}</Typography>
                    }
                  >
                    <ListItemText>
                      <Typography
                        component="span"
                        sx={{
                          color: 'rgba(254, 44, 85, 0.7)',
                          fontSize: '14px',
                        }}
                      >
                        {'#' + entry.name}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                )
              }}
              displayTransform={(id, display) => '#' + display}
            />
          ) : null}
        </MentionsInput>
        <Tooltip
          title={
            <Typography sx={{ fontSize: '16px' }}>
              Click to add Emoji
            </Typography>
          }
          placement="top"
          arrow
        >
          <IconButton
            disableFocusRipple
            disableRipple
            style={{width: 5 + "%", marginRight: 5 + "px"}}
            onClick={() => {
              setShowEmoji(!showEmoji)
            }}
          >
            <EmojiEmotionsOutlinedIcon />
          </IconButton>
        </Tooltip>
        {showEmoji ? (
          <Picker
            pickerStyle={{
              position: 'absolute',
              right: "10px",
              bottom: "8vh",
              boxShadow:
                'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
            }}
            onEmojiClick={onEmojiClick}
          />
        ) : null}
      </div>
    )
  }
)

export default InputWithMention
