import { useEffect, useState } from 'react';
import './video.scss';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { Link } from '@mui/material';



export default function VideoPersonal(props){
    const video = props.video;
    
    const [views,setViews] = useState(video.views);

    const fixViews = (x) => {
        if (x >= 1000000000000000){
            x = parseFloat(String(x/1000000000000000)).toFixed(1);
            return x + "MB";
        }
        if (x >= 1000000000000){
            x = parseFloat(String(x/1000000000000)).toFixed(1);
            return x + "T";
        }
        if (x >= 1000000000){
            x = parseFloat(String(x/1000000000)).toFixed(1);
            return x + "B";
        }
        if (x >= 1000000){
            x = parseFloat(String(x/1000000)).toFixed(1);
            return x + "M";
        }
        if (x >= 1000){
            x = parseFloat(String(x/1000)).toFixed(1);
            return x + "K";
        }
        return x;
    }

    useEffect(() => {
        var fixView = fixViews(views);
        setViews(fixView);
    })

    return(
        <div className="video--div">
            <video
                className="video__play"
                src={video.url}
                loop="true"
                onMouseEnter={event => event.target.play()}
                onMouseLeave={event => {event.target.pause();
                                        event.target.currentTime = 0 }}
                muted>
            </video>
            <PlayArrowRoundedIcon className="play--icon" /><p className="video__view">{views}</p>
        </div>
    );
}