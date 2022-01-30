import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onLoadAll } from '../../api/loadAllUser';
import Cookies from 'js-cookie';


// import icon
import HomeIcon from '@mui/icons-material/Home';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';


import './sidebar.scss';
import { onFollowingUser } from '../../api/follows';

function Sidebar(props){
    
    const [all, setAll] = useState([]);
    const [following, setFollow] = useState([]);
    const [res, setRes] = useState(true);

    // set user focus
    const [focus, setFocus] = useState('disable');

    // set btn login
    //const [login, setLogin] = useState('disable');

    useEffect(() => {
        async function fecthData(){
            const res = await onLoadAll();
            setAll(res.data.data);
            //console.log(localStorage.getItem('avatar'));
        }
        fecthData();
    }, []);
    useEffect(() => {
        async function fecthFollowing(){
            const res = await onFollowingUser(parseInt(localStorage.getItem('id')));
            const array = [];
            res.data.following.map((val, key) => {array.push(val.user_id_2)});
            setFollow(array);
            //console.log(array);
            //console.log(following);
        }
        fecthFollowing();
        //console.log(window.location.pathname);
    }, [])

    const SuggestUser = (val) => {
        return(
            <div className='sidebar--suggest--users'>
                <Link className='suggest--user--show' to={'/users/' + val.id}>
                    <img className='suggest--user--avatar' src={val.avatar} alt='avatar'/>
                    <div className='suggest--user--infor'>
                        <h1>{val.username}</h1>
                        <p>{val.fullname}</p>
                    </div>
                </Link>
                <div className={focus}>
                    <div className='show--infor--avatar'>
                        <img src={val.avatar} alt='avatar' />
                        <button>Follow</button>
                    </div>
                    <p className='show--infor--username'>{val.username}</p>
                    <p className='show--infor--fullname'>{val.fullname}</p>
                </div>
           </div>
        );
    }

    const LoginBtn = () => {
        if (Cookies.get('user') == null){
            return(
                <div className="sidebar--div--login">
                    <p>{props.lang("sidebar.login_title")}</p>
                    <button>{props.lang("sidebar.login_button")}</button>
                </div>
            );
        }
        else{
            return(
                <></>
            );
        }
    }

    return (
        <div className='sidebar'>
            <div className='sidebar--div--change--pages'>
                {
                    (window.location.pathname == '/') ? (
                        <Link className='sidebar--for--you key' to='/'><HomeIcon style={{
                            marginRight: 20 + "px",
                        }} /> {props.lang("sidebar.for_you")}</Link>
                    ):(<Link className='sidebar--for--you' to='/'><HomeIcon style={{
                        marginRight: 20 + "px",
                    }} /> {props.lang("sidebar.for_you")}</Link>)
                }
                {
                    (window.location.pathname == '/following') ? (
                        <Link className='sidebar--following key' to='/following'><GroupRoundedIcon style={{
                            marginRight: 20 + "px",
                        }} /> {props.lang("sidebar.following")}</Link>
                    ):(<Link className='sidebar--following' to='/following'><GroupRoundedIcon style={{
                        marginRight: 20 + "px",
                    }} /> {props.lang("sidebar.following")}</Link>)
                }
            </div>
            <LoginBtn />
            <div className='sidebar--div--suggest'>
                <h1 className='sidebar--div--title'>{props.lang("sidebar.suggest_user")}</h1>
                {all.map((val) => {
                    if (val.id != localStorage.getItem('id'))
                    { 
                        if (!following.includes(val.id)){
                            return SuggestUser(val);
                        }
                    }})
                }
            </div>
            <div className='sidebar--div--following'>
                <h1 className='sidebar--div--title'>{props.lang("sidebar.following_user")}</h1>
                {all.map((val) => {
                    if (val.id != localStorage.getItem('id'))
                    { 
                        if (following.includes(val.id)){
                            return SuggestUser(val);
                        }
                    }})
                }
            </div>
            <div className='sidebar--div--hot--hashtags'>
                <h1 className='sidebar--div--title'>{props.lang("sidebar.musics_recommend")}</h1>
            </div>
        </div>
    );
}

export default Sidebar;