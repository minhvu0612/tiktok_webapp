import { Button } from '@mui/material';
import './video_page.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';


export default function VideoPage(props) {
    const video_user = props.video_user;
    const video = video_user.video;
    const user = video_user.user;
    return(
        <div class="video__page">
            <video
                class="video"
                src={video.url}
                autoplay="autoplay"
                loop="true"
                controls
            >
            </video>
            <div class="video--content">
                <img src={user.img} alt="" />
                <div class="video--infor">
                    <h1>{user.username}</h1>
                    <p>{user.name} - {video.time}</p>
                    <Button className="video--page--btn">
                        Follow
                    </Button>
                </div>
                <p class="description">{video.description}</p>
                <a href="">{
                        video.hashtag.map(
                            (hashtagName) => "#" + hashtagName
                        )
                }</a>
                <FavoriteIcon />
                <CommentRoundedIcon />
            </div>
        </div>
    );
}