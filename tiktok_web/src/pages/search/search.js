import { useEffect, useState } from "react";
import { get_users, get_videos } from "../../api/search";
import Menu from "../../components/menu/menu";
import Sidebar from "../../components/sidebar/sidebar";
import UserChild from "../../components/videos/userChild";
import VideoHome from "../../components/videos/videoHome";


// style
import './search.scss';

function Search(props){

    const [search_users, setUsers] = useState([]);
    const [search_videos, setVideos] = useState([]);

    // 
    const [cl1, setCL1] = useState("search--user");
    const [cl2, setCL2] = useState("disable");

    useEffect(() => {
        const data = {
            value: localStorage.getItem("s_value"),
        }
        async function fetchDataUsers(){
            await get_users(data)
            .then(
                (res) => setUsers(res.data.data)
            )
        }

        async function fetchDataVideos(){
            await get_videos(data)
            .then(
                (res) => setVideos(res.data.data)
            )
        }
        fetchDataUsers();
        fetchDataVideos();
    }, []);

    const setColor = (x) => {
        document.getElementById(x).className = "btn--color";
    }
    const removeColor = (x) => {
        document.getElementById(x).className = "";
    }

    return(
        <div className="search--page">
            <Menu lang={props.lang} />
            <div className="search--container">
                <Sidebar lang={props.lang} />
                <div className="search--main">
                    <div className="search--main--btn">
                        <button id="btn1" className="btn--color" onClick={() => {
                            setColor("btn1"); 
                            removeColor("btn2");
                            setCL1("search--user");
                            setCL2("disable");
                            }}>Account</button>
                        <button id="btn2" onClick={() => {
                            setColor("btn2"); 
                            removeColor("btn1");
                            setCL1("disable");
                            setCL2("search--video");
                            }}>Video</button>
                    </div>
                    <div className={cl1}>
                    {search_users.length != 0
                        ? search_users.map((val, key) => {
                            if (parseInt(localStorage.getItem('id')) != val.id) {
                                return <UserChild user={val} />
                            }
                        })
                        : (<h1>Không tìm thấy</h1>)
                    }
                    </div>
                    <div className={cl2}>
                    {search_videos.length != 0
                        ? search_videos.map((val, key) => {
                            if (parseInt(localStorage.getItem('id')) != val.user.id) {
                                return <VideoHome val={val} lang={props.lang} />
                            }
                        })
                        : (<h1>Không tìm thấy</h1>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Search;