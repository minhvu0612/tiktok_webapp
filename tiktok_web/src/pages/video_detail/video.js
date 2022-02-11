import { useEffect, useRef, useState } from 'react'
import { onGetAllVideo, onGetVideoById } from '../../api/loadVideoByUserId'

// lib
import moment from 'moment'
import ClipLoader from 'react-spinners/ClipLoader'

// icon
import FavoriteIcon from '@mui/icons-material/Favorite'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'

import Alert from '@mui/material/Alert'

import './video.scss'
import {
  checkLikeCmt,
  checkLikeVideo,
  countLikeCmt,
  countLikeVideo,
  deleteLikeCmt,
  dislikeVideo,
  likeCmt,
  likeVideo,
} from '../../api/like'
import {
  onCheckFollow,
  onFollow,
  onFollowingUserList,
  onUnfollow,
} from '../../api/follows'
import {
  loadComment,
  loadReply,
  saveComment,
  saveReply,
} from '../../api/comments'
import InputWithMention from '../../components/mention'
import { convertComment } from '../../components/mention/Commentconvert'
import Rep, { SetRep } from './rep'
//Ech0

function MapRep(props) {
  const [data, setData] = useState([props.data])

  return (
    <>
      {data ? (
        <div>
          {data.map((val) => {
            return <p>{val.id}</p>
          })}
        </div>
      ) : null}
    </>
  )
}

function VideoDetail(props) {
  const [loading_web, setLoadingWeb] = useState(false)
  const [class_load, setClassLoad] = useState('disable')
  // set video - user - hashtag
  const [video, setVideo] = useState({})
  const [user, setUser] = useState({})
  const [hashtag, setHashtag] = useState({})

  // set video count-view
  const [count_like, setCountLike] = useState()
  const [count_view, setCountView] = useState()

  //following
  const [isFollow, setIsFollow] = useState(401)

  // check like
  const [check_like, setCheckLike] = useState(0)

  // set write comment
  const [comment, setComment] = useState('')

  // set comments
  const [comments, setComments] = useState([])
  const [count_like_cmt, setCountLikeCmt] = useState([])
  const [check_like_cmt, setCheckLikeCmt] = useState([])
  const [load_comments, setLoadComments] = useState(true)

  // inputstyles
  const inputStyles = {
    marginLeft: '32px',
    flex: '1',
    backgroundColor: 'rgba(22, 24, 35, 0.06)',
    marginBottom: '10px',
    marginTop: '25px',
    marginRight: '100px',
    borderRadius: '8px',
    paddingLeft: '6px',
    display: 'flex',
    justifyContent: 'space-between',
  }

  const inputRef = useRef(null)

  // set replies
  const [all_rep, setAllRep] = useState([])
  const [count_like_rep, setCountLikeRep] = useState([])
  const [check_like_rep, setCheckLikeRep] = useState([])

  const [urep, setURep] = useState('')

  const [reply, setReply] = useState('disable')

  const [cmt_rep, setCmtRep] = useState({})

  const [show_rep, setShowRep] = useState('disable')

  // set state cmt , rep
  const [type_cmt, setTypeCmt] = useState(1)
  //alert
  const [openAlert, setOpenAlert] = useState(false)

  //// ______________________________________ ///////////////

  useEffect(async () => {
    //setLoad(true);
    setLoadingWeb(true)
    setClassLoad('sweet-loading')
    setTimeout(() => {
      setLoadingWeb(false)
      setClassLoad('disable')
    }, 2000)
  }, [window.location.pathname])

  // set Video
  useEffect(async () => {
    //console.log(props.id);
    await onGetVideoById(props.id).then((res) => {
      setVideo(res.data.data)
      setUser(res.data.data.user)
      setHashtag(res.data.data.hashtag)
    })
  }, [])

  /* set Check Current User Like Video */
  useEffect(async () => {
    //console.log(video.id)
    const data = {
      user_id: localStorage.getItem('id'),
      video_id: props.id,
    }
    await countLikeVideo(props.id).then((res) => {
      //console.log(res.data);
      setCountLike(res.data.like)
    })
    await checkLikeVideo(data).then((res) => {
      //console.log(res);
      if (res.data.alert == 200) {
        setCheckLike(1)
      } else {
        setCheckLike(0)
      }
    })
  }, [check_like])

  /* check current user follow this user */

  useEffect(() => {
    const data = {
      user_id_1: parseInt(localStorage.getItem('id')),
      user_id_2: user.id,
    }
    //console.log(data);
    async function fetchCheckFollow() {
      const res = await onCheckFollow(data)
      setIsFollow(res.data.alert)
    }
    fetchCheckFollow()
  }, [user])

  /*  Load all cmt of video  */

  const choose = (data, id) => {
    const arr = []
    data.forEach((val, key) => {
      if (val.comment_id == id) {
        arr.push(val)
      }
    })
    //console.log(arr);
    return arr;
  }

  useEffect(async () => {
    if (load_comments) {
      async function fetchComment() {
        const res = await loadComment({
          user_id: localStorage.getItem('id'),
          video_id: props.id,
        })
        const res1 = await loadReply({ user_id: localStorage.getItem('id') })
        res1.data.data.forEach((val) => {
          val.content = convertComment(val.content)
        })
        console.log(res1.data)
        setAllRep(res1.data.data)
        setCountLikeRep(res1.data.data_count)
        setCheckLikeRep(res1.data.data_check)

        res.data.data.forEach((val) => {
          val.content = convertComment(val.content)
          val.replies = choose(res1.data.data, val.id)
          //console.log(val.replies)
        })
        //console.log(res.data.data);
        setComments(res.data.data)
        setCountLikeCmt(res.data.data_count)
        setCheckLikeCmt(res.data.data_check)
      }
      fetchComment()
    }
    setLoadComments(false)
  })

  /* Like cmt */
  const onLikeCmt = async (id) => {
    const data = {
      user_id: localStorage.getItem('id'),
      comment_id: id,
      status: 1,
    }
    await likeCmt(data).then((res) => {
      setLoadComments(true)
    })
  }

  const onDislikeCmt = async (id) => {
    const data = {
      user_id: localStorage.getItem('id'),
      comment_id: id,
    }
    await deleteLikeCmt(data).then((res) => {
      if (res.data.alert == 200) {
        setLoadComments(true)
      }
    })
  }

  /* Like Video */
  const onLikeVideo = async () => {
    const data = {
      user_id: localStorage.getItem('id'),
      video_id: props.id,
    }
    await likeVideo(data).then((res) => {
      if (res.data.alert == 200) {
        setCheckLike(1)
      }
    })
  }

  const onDislikeVideo = async () => {
    const data = {
      user_id: localStorage.getItem('id'),
      video_id: props.id,
    }
    await dislikeVideo(data).then((res) => {
      if (res.data.alert == 200) {
        setCheckLike(0)
      }
    })
  }

  /* FOLLOW */

  const handleFollow = async () => {
    const data = {
      user_id_1: parseInt(localStorage.getItem('id')),
      user_id_2: user.id,
    }
    const res = await onFollow(data)
    console.log(user)

    setIsFollow(200)
  }

  const handleUnfollow = async () => {
    const data = {
      user_id_1: parseInt(localStorage.getItem('id')),
      user_id_2: user.id,
    }
    const res = await onUnfollow(data)
    setIsFollow(401)
  }

  /* WRITE CMT */

  const handleComment = async () => {
    const data = {
      content: comment,
      user_id: localStorage.getItem('id'),
      video_id: props.id,
    }
    await saveComment(data).then((res) => {
      setLoadComments(true)
      setComment('')
    })
  }

  /*-------------------------- REPLY ---------------------------*/

  const handleReply = async (id) => {
    const data = {
      content: comment,
      user_id: localStorage.getItem('id'),
      comment_id: id,
    }
    //console.log(data);
    await saveReply(data).then((res) => {
      //console.log(res);
      setLoadComments(true)
      setComment('')
      setReply('disable')
      setTypeCmt(1)
    })
  }

  return (
    <div className="videodetails">
      {openAlert ? (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          This is a success alert — check it out!
        </Alert>
      ) : null}
      <div className={class_load}>
        <ClipLoader
          size={100}
          color={'rgba(254, 44, 85, 1.0)'}
          loading={loading_web}
          speedMultiplier={1.0}
        />
      </div>
      <div
        className="videodetails--main"
        style={{ backgroundImage: video.background_video }}
      >
        <img src={video.background_video} alt="bg" />
        <div className="bg--color"></div>
        <button
          className="videodetails--exit"
          onClick={() => {
            window.history.back()
          }}
        >
          <CloseIcon />
        </button>
        <video
          className="videodetails--src"
          src={video.url}
          loop={true}
          autoPlay
          controls
          unmuted
        ></video>
      </div>
      <div className="videodetails--sidebar">
        <div className="videodetails--infor">
          <div className="video--user--infor">
            <img src={user.avatar} alt="" />
            <div>
              {localStorage.getItem('id') != user.id ? (
                <h1
                  onClick={() => {
                    window.location.href = '/users/' + user.id
                  }}
                >
                  {user.username}
                </h1>
              ) : (
                <h1
                  onClick={() => {
                    window.location.href = '/personal'
                  }}
                >
                  {user.username}
                </h1>
              )}
              <p>{user.fullname}</p>
            </div>
            {localStorage.getItem('id') != user.id ? (
              isFollow == 401 ? (
                <button
                  className="videodetails--follow--btn"
                  onClick={() => handleFollow()}
                >
                  Follow
                </button>
              ) : (
                <button
                  className="videodetails--unfollow--btn"
                  onClick={() => handleUnfollow()}
                >
                  Unfollow
                </button>
              )
            ) : null}
          </div>
          <p>{video.description}</p>
          {localStorage.getItem('id') != user.id ? (
            <h1
              onClick={() => {
                window.location.href = '/users/' + user.id
              }}
            >
              {hashtag.hashtag_name}
            </h1>
          ) : (
            <h1
              onClick={() => {
                window.location.href = '/personal'
              }}
            >
              {hashtag.hashtag_name}
            </h1>
          )}
          <div className="like--view">
            <div className="like">
              {check_like ? (
                <button onClick={() => onDislikeVideo()}>
                  <FavoriteIcon style={{ color: 'rgba(254, 44, 85, 1.0)' }} />
                </button>
              ) : (
                <button onClick={() => onLikeVideo()}>
                  <FavoriteIcon />
                </button>
              )}
              <h1>{count_like}</h1>
            </div>
            <div className="view">
              <button>
                <RemoveRedEyeIcon />
              </button>
              <h1>20</h1>
            </div>
          </div>
        </div>
        <div className="videodetails--comment">
          {comments != [] ? (
            <div className="video--comment">
              {comments.map((val, key) => (
                <div
                  style={{
                    width: 100 + '%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <div>
                    {val.user.id == user.id ? (
                      <div className="line--comment">
                        <img src={val.user.avatar} alt="" />
                        <div>
                          <h1 style={{ color: 'rgb(228, 23, 64)' }}>
                            {val.user.username}
                          </h1>
                          <p
                            dangerouslySetInnerHTML={{ __html: val.content }}
                          ></p>
                        </div>
                      </div>
                    ) : (
                      <div className="line--comment">
                        <img src={val.user.avatar} alt="" />
                        <div>
                          <h1>{val.user.username}</h1>
                          <p
                            dangerouslySetInnerHTML={{ __html: val.content }}
                          ></p>
                        </div>
                      </div>
                    )}
                    <div className="time--comment">
                      <p>{moment(val.created_at).format('MM-DD-YYYY')}</p>
                      <p
                        className="show--replies"
                        onClick={() => {
                          setURep(val.user.username)
                          setReply('replies')
                          setCmtRep(val)
                          setTypeCmt(0)
                        }}
                      >
                        Trả lời
                      </p>
                    </div>
                    <div className='replies--list'>
                    {val.replies != 0 ? (
                      <>
                        {show_rep == '' ? (
                          <p
                            style={{
                              cursor: 'pointer',
                              color: 'rgba(0,0,0,0.5)',
                              fontSize: 0.85 + 'em',
                              fontWeight: 'bold',
                              marginLeft: 65 + 'px',
                              marginTop: 0,
                            }}
                            onClick={() => setShowRep('disable')}
                          >
                            Ẩn tất cả
                          </p>
                        ) : (
                          <p
                            style={{
                              cursor: 'pointer',
                              color: 'rgba(0,0,0,0.5)',
                              fontSize: 0.85 + 'em',
                              fontWeight: 'bold',
                              marginLeft: 65 + 'px',
                              marginTop: 0,
                            }}
                            onClick={() => setShowRep('')}
                          >
                            Hiển thị tất cả
                          </p>
                        )}
                        <div className={show_rep}>
                          {all_rep.map((v, key) =>
                            SetRep(
                              v,
                              val.id,
                              check_like_rep[key],
                              count_like_rep[key],
                              user.id
                            )
                          )}
                        </div>
                      </>
                    ) : null}
                    </div>
                  </div>
                  <div className="like--comment">
                    {check_like_cmt[key] ? (
                      <button onClick={() => onDislikeCmt(val.id)}>
                        <FavoriteIcon
                          style={{ color: 'rgba(254, 44, 85, 1.0)' }}
                        />
                      </button>
                    ) : (
                      <button>
                        <FavoriteBorderIcon onClick={() => onLikeCmt(val.id)} />
                      </button>
                    )}
                    <p>{count_like_cmt[key]}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className={reply}>
          <div className="replying">
            {localStorage.getItem('username') == urep ? (
              <p>Đang trả lời chính mình</p>
            ) : (
              <p>
                Đang trả lời <span>{urep}</span>
              </p>
            )}
            <CloseIcon
              className="close--rep"
              onClick={() => {
                setReply('disable')
                setTypeCmt(1)
              }}
            />
          </div>
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.5)',
              fontWeight: 'normal',
              fontSize: 0.8 + 'em',
            }}
            dangerouslySetInnerHTML={{ __html: cmt_rep.content }}
          ></p>
        </div>
        <div className="write--comment">
          <InputWithMention
            innerref={inputRef}
            handleChange={(value) => setComment(value)}
            content={comment}
            styles={inputStyles}
          />
          {comment != '' ? (
            type_cmt == 1 ? (
              <p className="send" onClick={() => handleComment()}>
                Đăng
              </p>
            ) : (
              <p className="send" onClick={() => handleReply(cmt_rep.id)}>
                Đăng
              </p>
            )
          ) : (
            <p className="non--send">Đăng</p>
          )}
        </div>
      </div>
    </div>
  )
}
export default VideoDetail


/* 

{val.replies != 0 ? (
                      <>
                        {show_rep == '' ? (
                          <p
                            style={{
                              cursor: 'pointer',
                              color: 'rgba(0,0,0,0.5)',
                              fontSize: 0.85 + 'em',
                              fontWeight: 'bold',
                              marginLeft: 65 + 'px',
                              marginTop: 0,
                            }}
                            onClick={() => setShowRep('disable')}
                          >
                            Ẩn tất cả
                          </p>
                        ) : (
                          <p
                            style={{
                              cursor: 'pointer',
                              color: 'rgba(0,0,0,0.5)',
                              fontSize: 0.85 + 'em',
                              fontWeight: 'bold',
                              marginLeft: 65 + 'px',
                              marginTop: 0,
                            }}
                            onClick={() => setShowRep('')}
                          >
                            Hiển thị tất cả
                          </p>
                        )}
                        <div className={show_rep}>
                          {all_rep.map((v, key) =>
                            SetRep(
                              v,
                              val.id,
                              check_like_rep[key],
                              count_like_rep[key],
                              user.id
                            )
                          )}
                        </div>
                      </>
                    ) : null}*/