import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { onUpVideo } from "../../api/loadVideoByUserId";
import Menu from "../../components/menu/menu";
import VideoSnapshot from 'video-snapshot';


// import scss
import './upload.scss';
import { loadHashtag } from "../../api/hashtag";

function Upload(props){

    const [video, setVideo] = useState('');
    const [changeVideo, setChange] = useState('disable');
    const [upload_video, setUpload] = useState('disable');
    const [video_up, setVideoUp] = useState();


    // set infor video
    const [hashtag, setHashtag] = useState('');
    const [description, setDescription] = useState('');

    // load all hashtag
    const [all_hashtag, setAllHashtag] = useState([]);
    const [all_hashtag_class, setAllHashtagClass] = useState("disable");

    // set clear data
    const [clear, setClear] = useState('disable');

    // set alert
    const [success, setSuccess] = useState('disable');
    const [fail, setFail] = useState('disable');

    // set background video
    const videoTag = useRef(null);
    const [snapshots, setSnapshots] = useState([]);
    const [BG, setBG] = useState("");


    useEffect(() => {
        //console.log(localStorage);
        //console.log(file);
        document.title = "Tiktok - Upload";
    }, []);


    const upVideo = () => {
        const data = {
            "url": video_up,
            "description": description,
            "user_id": localStorage.getItem("id"),
            "hashtag_name": hashtag,
            "background_video": BG,
        }
        console.log(data);
        onUpVideo(data).then(
            (res) => {
                console.log(res);
                if (res.data.alert === 200){
                    setSuccess('success');
                    setTimeout(() => {
                        setSuccess('disable');
                    }, 1000);
                    window.location.href = "/";
                }
                else{
                    setFail('fail');
                    setTimeout(() => {
                       setFail('disable');
                    },1000);
                }
            }
        )
    }


    const uploadVideo = async (file) => {
        const form = new FormData();
        form.append("file", file);
        console.log(file);
        form.append("upload_preset", "upload_video");
        axios.post("https://api.cloudinary.com/v1_1/diw0u2vl1/video/upload", form).then(
          async (response) => {
                //console.log(response);
                setVideoUp(response.data.url);
            }
        )
    }

    const uploadBackground = async (file) => {
        const form = new FormData();
        form.append("file", file);
        //console.log(file);
        form.append("upload_preset", "background");
        axios.post("https://api.cloudinary.com/v1_1/diw0u2vl1/image/upload", form).then(
          async (response) => {
                console.log(response.data);
                setBG(response.data.url);
            }
        )
    }

    const getSnap = async (e) => {
        const snapshoter = new VideoSnapshot(e.target.files[0]);
        const arr = [];
        for (let i = 0; i < 2; i+= 0.2){
            const previewSrc = await snapshoter.takeSnapshot(i);
            arr.push(previewSrc);
        }
        setSnapshots(arr);
        //setBG(previewSrc)
    }


    const uploadVideoOnClick = () => {
        var x = document.getElementById("upload--video");
        x.click();
    }

    const onClickSetHashtag = async () => {
        var x = document.getElementById("hashtag");
        await loadHashtag().then(
            (res) => {
                setAllHashtag(res.data.data);
                setAllHashtagClass("all--hashtag");
            }
        )
    }

    const onChooseTag = (hashtag_name) => {
        var x = document.getElementById("hashtag");
        x.value = hashtag_name;
        setHashtag(hashtag_name);
        setAllHashtagClass("disable");
    }

    return(
        <div className="upload">
            <Menu lang = {props.lang} />
            <div className="upload--containner">
                <div className="upload--main">
                    <h1>Tải lên video của bạn</h1>
                    <p>Tải video lên và chia sẻ với cộng đồng</p>
                    <div className="upload--main--child">
                        <div className="upload--upload--file" onClick={uploadVideoOnClick}>
                            <p>
                                Chọn video từ thiết bị của bạn(PNG, WEBP, JPEG)
                            </p>
                            <input type="file" hidden id="upload--video" 
                                   accept="video/org, video/mp4" 
                                   onChange={(e) => {
                                       setVideo(e.target.files[0].name);
                                       uploadVideo(e.target.files[0]);
                                       setChange('change--video');
                                       setUpload('video--upload');
                                       getSnap(e);
                                       }} />
                            <button className='upload--btn--upload'>Choosen a file</button>
                            <div className={changeVideo}>
                                <h2 className='video--name'>{video}</h2>
                                <h2 className='change'>Thay đổi avatar</h2>
                            </div>
                            <video className={upload_video} 
                                   src={video_up}
                                   autoPlay
                                   muted
                                   loop = {false}
                                   controls>
                            </video>
                        </div>
                        <div className='upload--upload--form'>
                            <label>Hashtag</label><br />
                            <input type='text' id="hashtag" required  onChange={(e) => {setHashtag(e.target.value)}} /><br />
                            <p onClick={() => onClickSetHashtag()}>#</p>
                            <div className={all_hashtag_class} onMouseOut={() => setTimeout(() => setAllHashtagClass("disable"),2000)}>
                                {
                                    all_hashtag.map((tag) => <button onClick={() => onChooseTag(tag.hashtag_name)}>{tag.hashtag_name}</button>)
                                }
                            </div>
                            <label>Description</label><br />
                            <textarea type='text' required onChange={(e) => {setDescription(e.target.value)}} /><br />
                            <div className="background--video" ref={videoTag}>
                                {snapshots.map((snapshot, index) => (
                                    <div className="snapshot__item" onChange={() => {uploadBackground(snapshot)}}>
                                        <input
                                            className="snapshot"
                                            type="radio"
                                            name="snapshot"
                                            id={index}
                                        />
                                        <label htmlFor={index}>
                                            <img height="100%" width="100%" src={snapshot} />
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className='upload--submit--clear'>
                                <button onClick={() => {setClear('clear')}}>Hủy bỏ</button>
                                <button onClick={() => {upVideo()}}>Đồng ý</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clear}>
                <div className='clear--all'>
                    <h1 className='clear--title'>Bạn chắc chắn muốn hủy tải video lên?</h1>
                    <div className='clear--btn'>
                        <button onClick={() => {setClear('disable'); window.location.href = '/';}}>Hủy tải lên</button>
                        <button onClick={() => {setClear('disable')}}>Hủy</button>
                    </div>
                </div>
            </div>
            <div className={success}>Thành công</div>
            <div className={fail}>Tên đã được sử dụng</div>
        </div>
    );
}


export default Upload;