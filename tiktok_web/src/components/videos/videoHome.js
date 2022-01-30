import { Link } from 'react-router-dom';
import { onFollow } from '../../api/follows';
import './videoChild.scss';


function VideoHome(props){

    return (
    <div className='video--home--div'>
        <div className='video--home'>
            <div className='video--home--infor'>
                <img className='video--home--user--avatar' src={props.val.user.avatar} />
                <div className='video--home--user--infor'>
                    <p style={{color: "rgba(254, 44, 85, 1.0)"}}>
                        <Link className='link--user--infor' to={'/users/' + props.val.user.id}>
                            {props.val.user.username}</Link> {props.val.user.fullname}</p>
                    <p>{props.val.description}</p>
                    <Link className='link--hashtag--infor' to={'/users/' + props.val.user.id}>
                        {props.val.hashtag.hashtag_name}
                    </Link>
                </div>
            </div>
            <div onClick={() => window.location.href = "/videos/" + props.val.id}>
                <video
                    className="video--src"
                    src={props.val.url}
                    loop={true}
                    controls
                    muted>
                </video>
            </div>
            <hr />
        </div>
        {
            (window.location.pathname == '/') ?
            (<button onClick={async () => {
                if (localStorage.getItem('id') != null){
                    const res = await onFollow({
                        user_id_1: parseInt(localStorage.getItem('id')),
                        user_id_2: props.val.user.id,
                    });
                    window.location.reload();
                }
                else{
                    
                }
            }
            }>{props.lang("user.follow")}</button>):null
        }
    </div>   
    );
}
export default VideoHome;