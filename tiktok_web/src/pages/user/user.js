import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { onCheckFollow, onCountFollow, onFollow, onUnfollow } from "../../api/follows";
import { onGetUser } from "../../api/getUser";
import { getAllVideoLike } from "../../api/like";
import { onGetVideoByUser } from "../../api/loadVideoByUserId";
import Menu from "../../components/menu/menu";
import Sidebar from "../../components/sidebar/sidebar";
import VideoChild from "../../components/videos/videoChild";
import './../personal/personal.scss';

function User(props){
    const [user, setUser] = useState({});

    const [following, setFollowing] = useState(0);
    const [follower, setFollower] = useState(0);
    const [like, setLike] = useState(0);

    // set following
    const [isFollow, setIsFollow] = useState(401);


    // set btn change
    const [trans, setTrans] = useState('');
    const [change_color1, setChangeColor1] = useState('change_color');
    const [change_color2, setChangeColor2] = useState('');

    // set all videos
    const [videos, setVideos] = useState([]);

    // set follow , unfollow
    const [follow, setFollow] = useState('follow--btn')
    const [unfollow, setUnfollow] = useState('unfollow--btn');


    // set myvideos , mylikes
    const [myvideos, setMyVideos] = useState('personal--myvideo');
    const [mylikes, setMyLikes] = useState('disable');


    // set alert not login
    const [alert, setAlert] = useState('disable');

    // set load count
    const [loading, setLoad] = useState(true);
    const [class_load, setClassLoad] = useState('disable');


    // set load website
    const [loading_web, setLoadingWeb] = useState(false);

    const fixCount = (count) => {
        if (count >= 1000000){
            return count / 1000000 + "M";
        }
        if (count >= 1000){
            return count / 1000 + "K";
        }
        else{
            return count;
        }
    }

    useEffect(() => {
        //console.log(props.id);
        async function fetchDataUser(){
            const res = await onGetUser(props.id);
            //console.log(res.data.data);
            setUser(res.data.data);
            document.title = "Tiktok - " + res.data.data.username;
        }
        fetchDataUser();
        async function fetchDataVideo(){
            const res = await onGetVideoByUser(props.id);
            //console.log(res.data.data.length);
            setVideos(res.data.data);
        }
        fetchDataVideo();
    }, [props.id])

    useEffect(() => {
        const data = {
            user_id_1: parseInt(localStorage.getItem('id')),
            user_id_2: props.id,
        }
        //console.log(data);
        async function fetchCheckFollow(){
            const res = await onCheckFollow(data);
            //console.log(res.data.alert);
            setIsFollow(res.data.alert);
        }
        fetchCheckFollow();
    }, [props.id]);
 
    useEffect(async () => {
        setLoad(true);
        setLoadingWeb(true);
        setClassLoad('sweet-loading');
        setTimeout(() => {
            setLoadingWeb(false);
            setClassLoad('disable');
        }, 2000)
    }, [window.location.pathname]);

    useEffect(() => {
        async function fetchCountFollow(){
            const res = await onCountFollow(props.id);
            //console.log(res.data.alert);
            setFollower(res.data.followers);
            setFollowing(res.data.following);
        }
        fetchCountFollow();
        async function fetchLikeCount(){
            const res = await getAllVideoLike(props.id);
            setLike(res.data.data);
        }
        fetchLikeCount();
        setLoad(false);
    }, [loading]);

    const handleFollow = async () => {
        const data = {
            user_id_1: parseInt(localStorage.getItem('id')),
            user_id_2: user.id,
        }
        const res = await onFollow(data);
        setIsFollow(200);
        setLoad(true);
        //window.location.reload();
    }

    const handleUnfollow = async () => {
        const data = {
            user_id_1: parseInt(localStorage.getItem('id')),
            user_id_2: user.id,
        }
        const res = await onUnfollow(data);
        //console.log(res.data);
        setIsFollow(401);
        setLoad(true);
        //window.location.reload();
    }

    const Des = () => {
        if (user.facebook === "" && user.description === ""){
            return (
                <div className="personal--description--facebook">
                    <p>{props.lang("user.description")}</p>
                </div>
            );
        }
        if (user.facebook === "" && user.description !== ""){
            return (
                <div className="personal--description--facebook">
                    <p>{user.description}</p>
                </div>
            );
        }
        if (user.facebook !== "" && user.description === ""){
            return (
                <div className="personal--description--facebook">
                    <a href={user.facebook}>{user.facebook}</a>
                </div>
            );
        }
        else{
            return (
                <div className="personal--description--facebook">
                    <p>{user.description}</p>
                    <a href={user.facebook}>{user.facebook}</a>
                </div>
            );
        }
    }


    return (
        <div className="personal">
            <div className={class_load}>
                <ClipLoader size={100} color={"rgba(254, 44, 85, 1.0)"} loading={loading_web} speedMultiplier={1.0} />
            </div>
            <Menu lang = {props.lang} />
            <div className="personal--container">
                <Sidebar lang = {props.lang} />
                <div className="scroll"></div>
                <div className="personal--main">
                    <div className="personal--infor">
                        <div className="personal--avatar--name">
                            <img src={user.avatar} alt="avatar" />
                            <div className="personal--name">
                                <h1 className="personal--username">{user.username}</h1>
                                <h1 className="personal--fullname">{user.fullname}</h1>
                                {
                                    (isFollow == 401) ? (
                                        <button className='follow--btn' style={{width: 180 + 'px', 
                                        height: 40 + 'px',
                                        marginTop: 5 +'px',
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: 1 + 'em',
                                        border: "none",
                                        borderRadius: 5 + 'px',
                                        }}
                                        onClick={() => {
                                            if (localStorage.getItem('id') != null){
                                                handleFollow();
                                            }
                                            else{
                                                setAlert('alert--notlogin');
                                            }
                                        }}
                                        >{props.lang("user.follow")}</button>
                                    ):
                                    (
                                        <button className='unfollow--btn' style={{width: 180 + 'px', 
                                                height: 40 + 'px',
                                                marginTop: 5 +'px',
                                                color: "black",
                                                fontWeight: "bold",
                                                fontSize: 1 + 'em',
                                                borderRadius: 5 + 'px',
                                                }}
                                        onClick={handleUnfollow}
                                        >{props.lang("user.unfollow")}</button>
                                    )
                                }
                            </div>
                            {(follower >= 5) ? (
                                <img style={{width: 20 +'px', height: 20 + 'px', marginTop: 13 + 'px', marginLeft: 10 + 'px'}} 
                                    src="https://res.cloudinary.com/diw0u2vl1/image/upload/v1642018577/assets/326015319115211_rsnxoi.png" />
                                ):null
                            }
                        </div>
                        <div className="personal--counts">
                            <p><span>{fixCount(following)}</span> {props.lang("user.following")}</p>
                            <p><span>{fixCount(follower)}</span> {props.lang("user.follower")}</p>
                            <p><span>{fixCount(like)}</span> {props.lang("user.likes")}</p>
                        </div>
                        <Des />
                    </div>
                    <div className="personal--video">
                        <button className={change_color1} onClick={() => 
                            {
                                setTrans('trans--2');
                                setChangeColor1('change_color');
                                setChangeColor2('');
                                setMyVideos('personal--myvideo');
                                setMyLikes('disable');
                            }
                        }>{props.lang("user.myvideo")}</button>
                        <button className={change_color2} onClick={() =>{
                            setTrans('trans--1');
                            setChangeColor2('change_color');
                            setChangeColor1('');
                            setMyLikes('personal--mylike');
                            setMyVideos('disable');
                        }}>{props.lang("user.mylikes.1")}</button>
                        <hr className={trans} />
                    </div>
                    <div className={myvideos}>
                        {(videos.length != 0) ? (
                            videos.map((val, key) => <Link to={'personal/video/' + val.id}><VideoChild val={val} /></Link>)
                            ): 
                            (<div className="null--videos" style={{paddingLeft: 0 +'px'}}>
                                <img style={{marginLeft: 250 + 'px'}} 
                                     src="https://res.cloudinary.com/diw0u2vl1/image/upload/v1642019466/assets/aa1_ig429l.png" alt="" />
                                <h1 style={{width: 600 + 'px'}}>{user.username + " " + props.lang("user.null_video_user")}</h1>
                            </div>)
                        }
                    </div>

                    <div className={mylikes}>
                        <div className="user--likes">
                            <img style={{marginLeft: 250 + 'px'}} 
                                 src="https://res.cloudinary.com/diw0u2vl1/image/upload/v1642058303/assets/lock_g9iwkv.png" alt="" />
                            <h1 style={{width: 600 + 'px'}}>{props.lang("user.like_video_1")}</h1>
                            <p>{props.lang("user.like_video_lock") + user.username}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={alert}>
                <div className="alert--content">
                    <h1>{props.lang('user.alert_title')}</h1>
                    <button onClick={() => setAlert('disable')}>{props.lang('user.alert_btn')}</button>
                </div>
            </div>
        </div>
    )
}

export default User;