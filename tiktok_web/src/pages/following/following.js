// import components
import Menu from "../../components/menu/menu";

// import scss
import './../home/home.scss';
import Sidebar from "../../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { onGetAllVideo } from "../../api/loadVideoByUserId";
import VideoHome from "../../components/videos/videoHome";
import { onFollowingUser } from "../../api/follows";


function Following(props){

    const [all_video, setAllVideo] = useState([]);
    const [all_follow, setAllFollow] = useState([]);

    useEffect(() => {
        async function fetchVideo(){
            const res = await onGetAllVideo();
            setAllVideo(res.data.data);
            console.log(res.data.data);
        }
        fetchVideo();

        async function fetchFollow(){
            const res = await  onFollowingUser(parseInt(localStorage.getItem('id')));
            const array = [];
            res.data.following.map((val, key) => {
                array.push(val.user_id_2);
            })
            setAllFollow(array);
        }
        fetchFollow();
        document.title = "Tiktok - Following";
    },[])

    return (
        <div className="home--page">
            <Menu lang={props.lang} />
            <div className="home--container">
                <Sidebar lang={props.lang} />
                <div className="home--main">
                    <div className="load--all--video">
                        {
                            (all_video.length != 0)?(
                                all_video.map((val, key) => {
                                    if(parseInt(localStorage.getItem('id')) != val.user.id){
                                        if (all_follow.includes(val.user.id)){
                                            return <VideoHome val = {val} lang = {props.lang} />
                                        }
                                    }
                                })
                            ):null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Following;