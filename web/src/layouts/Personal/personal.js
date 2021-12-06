import './personal.scss';
import VideoPersonal from '../../components/User_components/video';
import React, { useState } from 'react';
import Infor from '../../components/User_components/infor';
import { Button} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import video1 from '../../assets/video/1.mp4';
import video2 from '../../assets/video/2.mp4';
import video3 from '../../assets/video/3.mp4';
import video4 from '../../assets/video/4.mp4';
import video5 from '../../assets/video/5.mp4';
import video6 from '../../assets/video/6.mp4';
import video7 from '../../assets/video/7.mp4';
import video8 from '../../assets/video/8.mp4';
import video9 from '../../assets/video/9.mp4';
import video10 from '../../assets/video/10.mp4';
import video11 from '../../assets/video/11.mp4';
import video12 from '../../assets/video/12.mp4';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Personal(){
    
    const userInfor = {
        username: "h_chaukiuu",
        name: "Trần Huyền Châu",
        img: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0a1d79b3779bbc670e83c0b7dd17dd96.jpeg?x-expires=1637254800&x-signature=2t5fB5Bk2iUG5q7hIV%2Bnz79haFc%3D",
        facebook: "https://www.facebook.com/chauchaothit",
        email: "chaukiukiu@gmail.com"
    }

    const account = {
        following: 2000,
        followers: 3500000,
        likes: 128000000,
        userLevel: 1,
        description: "Dùng Duy Nhất 1 Nick FaceBook. Moi nick khác đều là giả mạo."
    }

    const infor = {
        userInfor: userInfor,
        account: account
    }


    const myVideo1 = {
        videoName: "1",
        url: video1,
        views: 2701000
    }

    const myVideo2 = {
        videoName: "2",
        url: video2,
        views: 25467890
    }

    const myVideo3 = {
        videoName: "3",
        url: video3,
        views: 5345436
    }

    const myVideo4 = {
        videoName: "4",
        url: video4,
        views: 89456534
    }

    const myVideo5 = {
        videoName: "5",
        url: video5,
        views: 3445646
    }

    const myVideo6 = {
        videoName: "6",
        url: video6,
        views: 12343545
    }

    const myVideo7 = {
        videoName: "7",
        url: video7,
        views: 1345454534
    }

    const myVideo8 = {
        videoName: "8",
        url: video8,
        views: 2345455643554668
    }

    const myVideo9 = {
        videoName: "9",
        url: video9,
        views: 34345446
    }

    const myVideo10 = {
        videoName: "10",
        url: video10,
        views: 4232342
    }

    const myVideo11 = {
        videoName: "11",
        url: video11,
        views: 51324234
    }

    const myVideo12 = { 
        videoName: "12",
        url: video12,
        views: 2345325435435
    }


    const videos = [myVideo1,myVideo2,myVideo3,myVideo4,myVideo5,myVideo6,
                    myVideo7,myVideo8,myVideo9,myVideo10,myVideo11,myVideo12];

   

    const [stateMain, setStateMain] = useState("btn1");
    const [stateButton1, setStateButton1] = useState("btn--video btn");
    const [stateButton2, setStateButton2] = useState("btn--video");

    const [stateVideo1, setStateVideo1] = useState("my--video");
    const [stateVideo2, setStateVideo2] = useState("liked--video hidden");

    return(
        <div class="user">
            <div class="user--infor">
                <Infor infor={infor} />
            </div>

            <div class="user--main">
                <div>
                    <Button
                        className={stateButton1}
                        onMouseEnter=""
                        onMouseLeave=""
                        onClick={() => {setStateMain("btn1");
                                        setStateButton1("btn--video btn");
                                        setStateButton2("btn--video");
                                        setStateVideo1("my--video");
                                        setStateVideo2("liked--video hidden");
                                    }}
                    >
                        Video
                    </Button>
                    <Button
                        className={stateButton2}
                        onMouseEnter=""
                        onMouseLeave=""
                        onClick={() => {setStateMain("btn2");
                                        setStateButton1("btn--video");
                                        setStateButton2("btn--video btn");
                                        setStateVideo1("my--video hidden");
                                        setStateVideo2("liked--video");
                                    }}
                    >
                        Đã Thích
                    </Button>
                    <hr className={stateMain}/>
                </div>
                <div class={stateVideo1}>
                    {videos.map((myVideo) => <Link className="video--link" to={'/personal/'+ myVideo.videoName}><VideoPersonal video={myVideo} /></Link>)}
                </div>
                <div class={stateVideo2}>
                    <div>
                       <LockOutlinedIcon className="lock--icon" />
                       <p class="lock--text">Video đã thích của người dùng này ở trạng thái riêng tư</p>
                       <p>Các video được thích bởi {userInfor.username} hiện đang ẩn</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}