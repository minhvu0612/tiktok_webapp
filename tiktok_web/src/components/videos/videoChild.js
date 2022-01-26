import './videoChild.scss';
import {Link} from "react-router-dom";

function VideoChild(props){

    return (
        <Link to={"/videos/" + props.val.id}>
            <video
                className="video--child"
                src={props.val.url}
                loop={true}
                onMouseEnter={event => event.target.play()}
                onMouseLeave={event => {event.target.pause();
                                    event.target.currentTime = 0 }}
                muted>
            </video>
        </Link>
    );
}
export default VideoChild;