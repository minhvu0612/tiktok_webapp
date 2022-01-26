import {useEffect, useRef, useState } from "react";
import { onGetAllVideo, onGetVideoById } from "../../api/loadVideoByUserId";

// lib
import moment from 'moment';

// icon
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



import './video.scss';
import { checkLikeCmt, checkLikeVideo, countLikeCmt, countLikeVideo, deleteLikeCmt, dislikeVideo, likeCmt, likeVideo } from "../../api/like";
import { onCheckFollow, onFollow, onFollowingUserList, onUnfollow } from "../../api/follows";
import { loadComment, saveComment } from "../../api/comments";
import InputWithMention from "../../components/mention";
import { convertComment } from "../../components/mention/Commentconvert";

function VideoDetail(props){


    // set video - user - hashtag
    const [video, setVideo] = useState({});
    const [user, setUser] = useState({});
    const [hashtag, setHashtag] = useState({});

    // set video count-view
    const [count_like, setCountLike] = useState();
    const [count_view, setCountView] = useState();

    //following
    const [isFollow, setIsFollow] = useState(401);

    // check like
    const [check_like, setCheckLike] = useState(0);

    // set write comment
    const [comment, setComment] = useState("");

    // set comments
    const [comments, setComments] = useState([]);
    const [count_like_cmt, setCountLikeCmt] = useState([]);
    const [check_like_cmt, setCheckLikeCmt] = useState([]);
    const [count_like_rep, setCountLikeRep] = useState();
    const [load_comments, setLoadComments] = useState(true);


    // set follow user
    const [fl_user, setFLUser] = useState([]);
    const [tag_user, setTagUser] = useState("disable");


    // inputstyles
    const inputStyles = {
        marginLeft: '32px',
        flex: '1',
        backgroundColor: 'rgba(22, 24, 35, 0.06)',
        marginBottom: '10px',
        marginTop: '25px',
        marginRight: "100px",
        borderRadius: '8px',
        paddingLeft: '6px',
        display: 'flex',
        justifyContent: 'space-between',
      }

    const inputRef = useRef(null);


    //// ______________________________________ ///////////////

    // set Video
    useEffect(async () => {
        //console.log(props.id);
        await onGetVideoById(props.id)
        .then(
            (res) => {
                setVideo(res.data.data);
                setUser(res.data.data.user);
                setHashtag(res.data.data.hashtag);
            }
        )
    }, []);


    /* set Check Current User Like Video */
    useEffect(async () => {
        //console.log(video.id)
        const data = {
            user_id: localStorage.getItem("id"),
            video_id: props.id,
        }
        await countLikeVideo(props.id)
        .then(
            (res) => {
                //console.log(res.data);
                setCountLike(res.data.like);
            }
        )
        await checkLikeVideo(data)
        .then(
            (res) => {
                //console.log(res);
                if (res.data.alert == 200){
                    setCheckLike(1);
                }
                else{
                    setCheckLike(0);
                }
            }
        )
    }, [check_like]);

    /* check current user follow this user */

    useEffect(() => {
        const data = {
            user_id_1: parseInt(localStorage.getItem('id')),
            user_id_2: user.id,
        }
        //console.log(data);
        async function fetchCheckFollow(){
            const res = await onCheckFollow(data);
            setIsFollow(res.data.alert);
        }
        fetchCheckFollow();
    }, [user]);


    /*  Load all cmt of video  */
    useEffect(() => {
        if (load_comments){
            async function fetchComment(){
                const res = await loadComment({user_id: localStorage.getItem("id"), video_id: props.id});
                //console.log(res.data);
                res.data.data.forEach((val) => {
                    val.content = convertComment(val.content);
                })
                setComments(res.data.data);
                setCountLikeCmt(res.data.data_count);
                setCheckLikeCmt(res.data.data_check);
            }
            fetchComment();
        }
        setLoadComments(false);
    });


    /* Like cmt */
    const onLikeCmt = async (id) => {
        const data = {
            user_id: localStorage.getItem("id"),
            comment_id: id,
            status: 1,
        }
        await likeCmt(data)
        .then(
            (res) => {
                setLoadComments(true);
            }
        )
    } 

    const onDislikeCmt = async (id) => {
        const data = {
            user_id: localStorage.getItem("id"),
            comment_id: id,
            status: 0,
        }
        await deleteLikeCmt(data)
        .then(
            (res) => {
                if (res.data.alert == 200){
                    setLoadComments(true);
                }
            }
        )
    } 


    /* Like Video */
    const onLikeVideo = async () => {
        const data = {
            user_id: localStorage.getItem("id"),
            video_id: props.id,
        }
        await likeVideo(data)
        .then(
            (res) => {
                if (res.data.alert == 200){
                    setCheckLike(1);
                }
            }
        )
    }

    const onDislikeVideo = async () => {
        const data = {
            user_id: localStorage.getItem("id"),
            video_id: props.id,
        }
        await dislikeVideo(data)
        .then(
            (res) => {
                if (res.data.alert == 200){
                    setCheckLike(0);
                }
            }
        )
    }


    /* FOLLOW */

    const handleFollow = async () => {
        const data = {
            user_id_1: parseInt(localStorage.getItem('id')),
            user_id_2: user.id,
        }
        const res = await onFollow(data);
        setIsFollow(200);
    }

    const handleUnfollow = async () => {
        const data = {
            user_id_1: parseInt(localStorage.getItem('id')),
            user_id_2: user.id,
        }
        const res = await onUnfollow(data);
        setIsFollow(401);
    }


    /* WRITE CMT */

    const handleComment = async () => {
        const data = {
            content: comment,
            user_id: localStorage.getItem("id"),
            video_id: props.id,
        }
        //console.log(data);
        await saveComment(data)
        .then(
            (res) => {
               //console.log(res);
               setLoadComments(true);
               setComments("");
               document.getElementById("comment").value = "";
            }
        )
    }


    /*-------------------------- REPLY ---------------------------*/
    
    // set write rep
    useEffect(async () => {
        await onFollowingUserList(localStorage.getItem("id"))
        .then(
            (res) => {
                //console.log(res.data.following);
                setFLUser(res.data.following);
            }
        )
    }, [isFollow]);

    const writeTagUser = (value) => {
        document.getElementById("comment").value += value;
        setComment(document.getElementById("comment"));
    }

    return(
        <div className="videodetails">
            <div className="videodetails--main">
                <button className="videodetails--exit" onClick={() => {window.history.back()}}>E</button>
                <video className="videodetails--src"
                    src={video.url}
                    loop={true}
                    controls
                    muted>
                </video>
            </div>
            <div className="videodetails--sidebar">
                <div className="videodetails--infor">
                    <div className="video--user--infor">
                        <img src={user.avatar} alt="" />
                        <div>
                            {
                                (localStorage.getItem("id") != user.id)?(
                                    <h1 onClick={() => {window.location.href = "/users/" + user.id}}>{user.username}</h1>
                                ):(
                                    <h1 onClick={() => {window.location.href = "/personal"}}>{user.username}</h1>
                                )
                            }
                            <p>{user.fullname}</p>
                        </div>
                        {
                            (localStorage.getItem("id") != user.id)?(
                                (isFollow == 401)?(
                                    <button className="videodetails--follow--btn" onClick={() => handleFollow()}>Follow</button>
                                ):(<button className="videodetails--unfollow--btn" onClick={() => handleUnfollow()}>Unfollow</button>)
                            ):null
                        }
                    </div>
                    <p>{video.description}</p>
                    {
                        (localStorage.getItem("id") != user.id)?(
                            <h1 onClick={() => {window.location.href = "/users/" + user.id}}>{hashtag.hashtag_name}</h1>
                        ):(
                            <h1 onClick={() => {window.location.href = "/personal"}}>{hashtag.hashtag_name}</h1>
                        )
                    }
                    <div className="like--view">
                        <div className="like">
                            {
                                (check_like)?(<button onClick={() => onDislikeVideo()}><FavoriteIcon style={{color: "rgba(254, 44, 85, 1.0)"}} /></button>)
                                : (<button onClick={() => onLikeVideo()}><FavoriteIcon /></button>)
                            }
                            <h1>{count_like}</h1>
                        </div>
                        <div className="view">
                            <button><RemoveRedEyeIcon /></button>
                            <h1>{count_view}</h1>
                        </div>
                    </div>
                </div>
                <div className="videodetails--comment">
                    {
                        (comments != [])?(
                            <div className="video--comment">
                                {comments.map((val, key) => (
                                    <div style={{width: 100 + "%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                        <div>
                                            <div className="line--comment">
                                                <img src={val.user.avatar} alt="" />
                                                <div>
                                                    <h1>{val.user.username}</h1>
                                                    <p dangerouslySetInnerHTML={{__html:val.content}}></p>
                                                </div>
                                            </div>
                                            <div className="time--comment">
                                                <p>{moment(val.created_at).format('MM-DD-YYYY')}</p>
                                                <p className="show--replies" onClick={() => {}}>Trả lời</p>
                                            </div>
                                        </div>
                                        <div className="like--comment">
                                            {
                                                (check_like_cmt[key])?
                                                (<button onClick={() => onDislikeCmt(val.id)}><FavoriteIcon style={{color: "rgba(254, 44, 85, 1.0)"}} /></button>):
                                                (<button><FavoriteBorderIcon onClick={() => onLikeCmt(val.id)} /></button>)
                                            }
                                            <p>{count_like_cmt[key]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ):null
                    }
                </div>
                <div className={tag_user}>
                    {
                        fl_user?fl_user.map((val, key) => <button onClick={() => writeTagUser("@" + val.user_2.username)}><img style={{width: 30 + "px", height: 30 + "px",
                                                                               borderRadius: 100 + "%", marginRight: 8 + "px"}} 
                                                                   src={val.user_2.avatar} alt="avt" />
                                                                   {val.user_2.username}</button>):null
                    }
                </div>
                <div className="write--comment">
                    <InputWithMention id="comment" 
                                      innerref={inputRef}
                                      handleChange={(value) => setComment(value)} 
                                      content={comment}
                                      styles={inputStyles}  />
                    {
                        (comment != "")?(
                            <p className="send" onClick={() => handleComment()}>Đăng</p>
                        ):(
                            <p className="non--send">Đăng</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default VideoDetail;