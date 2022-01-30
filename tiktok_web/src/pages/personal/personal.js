import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onCountFollow } from "../../api/follows";
import { getAllVideoLike, getVideoLike } from "../../api/like";
import { onGetVideoByUser } from "../../api/loadVideoByUserId";
import Menu from "../../components/menu/menu";
import Sidebar from "../../components/sidebar/sidebar";
import VideoChild from "../../components/videos/videoChild";
import './personal.scss';

function Personal(props){

    const [following, setFollowing] = useState(0);
    const [follower, setFollower] = useState(0);
    const [like, setLike] = useState(0);


    // set btn change
    const [trans, setTrans] = useState('');
    const [change_color1, setChangeColor1] = useState('change_color');
    const [change_color2, setChangeColor2] = useState('');

    // set all videos
    const [videos, setVideos] = useState([]);
    const [video_likes, setVideoLikes] = useState([]);


    // set myvideos , mylikes
    const [myvideos, setMyVideos] = useState('personal--myvideo');
    const [mylikes, setMyLikes] = useState('disable');

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
        async function fetchData(){
            const res = await onGetVideoByUser(localStorage.getItem('id'));
            //console.log(res.data.data.length);
            if (res.data.data.length != 0){
                setVideos(res.data.data);
            }
        }
        async function fetchMyLike(){
            const res = await getVideoLike(localStorage.getItem("id"));
            if (res.data.alert == 200){
                setVideoLikes(res.data.data);
                //res.data.data.map((val, key) => console.log(val.video.id)); 
            }
        }
        async function fetchLikeCount(){
            const res = await getAllVideoLike(localStorage.getItem("id"));
            setLike(res.data.data);
            console.log(res.data.data);
        }
        fetchLikeCount();
        fetchData();
        fetchMyLike();
        document.title = "Tiktok - Personal";
    }, [])

    useEffect(() => {
        async function fetchCountFollow(){
            const res = await onCountFollow(parseInt(localStorage.getItem('id')));
            //console.log(res.data.alert);
            setFollower(res.data.followers);
            setFollowing(res.data.following);
        }
        fetchCountFollow();
    }, [])

    const Des = () => {
        if (localStorage.getItem('facebook') === "" && localStorage.getItem('description') === ""){
            return (
                <div className="personal--description--facebook">
                    <p>{props.lang("user.description")}</p>
                </div>
            );
        }
        if (localStorage.getItem('facebook') === "" && localStorage.getItem('description') !== ""){
            return (
                <div className="personal--description--facebook">
                    <p>{localStorage.getItem('description')}</p>
                </div>
            );
        }
        if (localStorage.getItem('facebook') !== "" && localStorage.getItem('description') === ""){
            return (
                <div className="personal--description--facebook">
                    <a href={localStorage.getItem('facebook')}>{localStorage.getItem('facebook')}</a>
                </div>
            );
        }
        else{
            return (
                <div className="personal--description--facebook">
                    <p>{localStorage.getItem('description')}</p>
                    <a href={localStorage.getItem('facebook')}>{localStorage.getItem('facebook')}</a>
                </div>
            );
        }
    }


    return (
        <div className="personal">
            <Menu lang = {props.lang} />
            <div className="personal--container">
                <Sidebar lang = {props.lang} />
                <div className="personal--main">
                    <div className="personal--infor">
                        <div className="personal--avatar--name">
                            <img src={localStorage.getItem('avatar')} alt="avatar" />
                            <div className="personal--name">
                                <h1 className="personal--username">{localStorage.getItem('username')}</h1>
                                <h1 className="personal--fullname">{localStorage.getItem('fullname')}</h1>
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
                            videos.map((val, key) => <Link className="video--link" to={'personal/video/' + val.id}><VideoChild val={val} /></Link>)
                            ): 
                            (<div className="null--videos">
                                <img src="https://res.cloudinary.com/diw0u2vl1/image/upload/v1642019466/assets/aa1_ig429l.png" alt="" />
                                <h1>{props.lang("user.null_video_1")}</h1>
                                <p>{props.lang("user.null_video_2")}</p>
                            </div>)
                        }
                    </div>

                    <div className={mylikes}>
                        {(video_likes.length != 0) ? (
                            video_likes.map((val, key) => <Link className="video--link" to={'personal/video/' + val.video.id}><VideoChild val={val.video} /></Link>)
                            ): 
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;